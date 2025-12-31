import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme/ModeToggle";
import { useEffect, type ReactNode } from "react";

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  } else {
    window.location.hash = id;
  }

  const offset = 36;
  const top = window.scrollY + el.getBoundingClientRect().top - offset;

  window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: "smooth" });

  el.setAttribute("tabindex", "-1");
  (el as HTMLElement).focus({ preventScroll: true });
}

export const subtleButtonStyle =
  "cursor-pointer text-muted-foreground hover:text-primary bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent";

function Header() {
  useEffect(() => {
    // Prevent browser from restoring scroll position automatically for navigations.
    const prev =
      (window.history && (window.history as any).scrollRestoration) ||
      undefined;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If there's a hash on load, wait until layout is ready then run our smooth scroll.
    const hash = location.hash.replace(/^#/, "");
    if (hash) {
      // Two RAFs to ensure DOM layout is painted and React/SSR content is present.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => scrollToId(hash))
      );
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        (window.history as any).scrollRestoration = prev ?? "auto";
      }
    };
  }, []);

  const renderTextButton = ({ id, label }: { id: string; label: string }) => {
    return (
      <Button
        variant={"ghost"}
        size={"sm"}
        className={subtleButtonStyle}
        onClick={() => scrollToId(id)}
      >
        <h1 className="text-base">{label}</h1>
      </Button>
    );
  };

  const renderIconButton = ({
    icon,
    url,
    onClick,
    title,
  }: {
    icon: ReactNode;
    url?: string;
    onClick?: () => void;
    title?: string;
  }) => {
    const handleClick = () => {
      const newWindow = window.open(url, "_blank");
      if (newWindow) newWindow.opener = null;
    };

    return (
      <Button
        variant={"ghost"}
        size="icon"
        className={subtleButtonStyle}
        onClick={onClick ?? handleClick}
        title={title}
      >
        {icon}
      </Button>
    );
  };

  return (
    <>
      <header className="w-full text-foreground p-4">
        <div className="flex justify-between items-center">
          <h1
            className="text-xl font-semibold w-14 cursor-pointer opacity-70 hover:opacity-80"
            onClick={() => {
              if (window.history?.replaceState) {
                window.history.replaceState(null, "", window.location.pathname);
              } else window.location.hash = "";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/logo-light.svg"
              alt="Logo"
              className="block dark:hidden"
            />
            <img
              src="/logo-dark.svg"
              alt="Logo"
              className="hidden dark:block"
            />
          </h1>

          <div className="flex items-center">
            <div className="hidden min-[640px]:flex items-center">
              {renderTextButton({ id: "projects", label: "Projects" })}
              {renderTextButton({ id: "experience", label: "Experience" })}
              {renderTextButton({ id: "education", label: "Education" })}
              {renderTextButton({ id: "skiing", label: "Skiing" })}
            </div>

            {renderIconButton({
              icon: <Linkedin />,
              url: "https://linkedin.com/in/luke-hs",
              title: "LinkedIn",
            })}

            {renderIconButton({
              icon: <Mail />,
              onClick: () => {
                const to = "you@example.com";
                const subject = encodeURIComponent("Hello");
                const body = encodeURIComponent("Hi Luke,");
                window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
              },
              title: "Email",
            })}

            {renderIconButton({
              icon: <Github />,
              url: "https://github.com/LukeHenningSmith",
              title: "GitHub",
            })}

            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
