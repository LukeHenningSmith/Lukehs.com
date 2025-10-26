import { ModeToggle } from "./theme/ModeToggle";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

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
            <Button variant={"ghost"} size={"sm"} className="cursor-pointer">
              <h1 className="text-base">Experience</h1>
            </Button>

            <Button variant={"ghost"} size={"sm"} className="cursor-pointer">
              <h1 className="text-base">Education</h1>
            </Button>

            <Button variant={"ghost"} size={"sm"} className="cursor-pointer">
              <h1 className="text-base">Projects</h1>
            </Button>

            <Button variant={"ghost"} size="icon" className="cursor-pointer">
              <Linkedin />
            </Button>

            <Button variant={"ghost"} size="icon" className="cursor-pointer">
              <Mail />
            </Button>

            <Button variant={"ghost"} size="icon" className="cursor-pointer">
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
