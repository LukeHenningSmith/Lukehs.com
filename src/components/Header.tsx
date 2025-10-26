import { ModeToggle } from "./theme/ModeToggle";

function Header() {
  return (
    <header className="w-full text-foreground p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Logo</h1>
        <div className="flex items-center gap-4">
          <h1 className="text-lg">Experience</h1>
          <h1 className="text-lg">Education</h1>
          <h1 className="text-lg">Projects</h1>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
