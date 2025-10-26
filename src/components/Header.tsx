import { ModeToggle } from "./theme/ModeToggle";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  } else {
    window.location.hash = id;
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  el.setAttribute("tabindex", "-1");
  (el as HTMLElement).focus({ preventScroll: true });
}

function Header() {
  return (
    <>
      <header className="w-full text-foreground p-4">
        <h1 className="fixed text-xl font-semibold">
          <img src="/logo-light.svg" alt="Logo" className="block dark:hidden" />
          <img src="/logo-dark.svg" alt="Logo" className="hidden dark:block" />
        </h1>

        <div className="flex justify-end">
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              size={"sm"}
              className="cursor-pointer"
              onClick={() => scrollToId("experience")}
            >
              <h1 className="text-base">Experience</h1>
            </Button>

            <Button
              variant={"ghost"}
              size={"sm"}
              className="cursor-pointer"
              onClick={() => scrollToId("education")}
            >
              <h1 className="text-base">Education</h1>
            </Button>

            <Button
              variant={"ghost"}
              size={"sm"}
              className="cursor-pointer"
              onClick={() => scrollToId("projects")}
            >
              <h1 className="text-base">Projects</h1>
            </Button>

            <Button
              variant={"ghost"}
              size={"sm"}
              className="cursor-pointer"
              onClick={() => scrollToId("skiing")}
            >
              <h1 className="text-base">Skiing</h1>
            </Button>

            <Button
              variant={"ghost"}
              size="icon"
              className="cursor-pointer"
              onClick={() => {
                const newWindow = window.open(
                  "https://linkedin.com/in/luke-hs",
                  "_blank"
                );
                if (newWindow) newWindow.opener = null;
              }}
            >
              <Linkedin />
            </Button>

            <Button
              variant={"ghost"}
              size="icon"
              className="cursor-pointer"
              onClick={() => {
                const to = "you@example.com";
                const subject = encodeURIComponent("Hello");
                const body = encodeURIComponent("Hi Luke,");
                window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
              }}
            >
              <Mail />
            </Button>

            <Button
              variant={"ghost"}
              size="icon"
              className="cursor-pointer"
              onClick={() => {
                const newWindow = window.open(
                  "https://github.com/LukeHenningSmith",
                  "_blank"
                );
                if (newWindow) newWindow.opener = null;
              }}
            >
              <Github />
            </Button>

            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
