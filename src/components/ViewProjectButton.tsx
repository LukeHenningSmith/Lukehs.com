import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function ViewProjectButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      title="View project"
      className="group relative text-primary border-primary dark:border-primary bg-transparent 
                        hover:text-blue-600 hover:bg-blue-600/10 hover:border-blue-600 dark:hover:text-blue-300 
                        dark:bg-transparent dark:hover:bg-blue-600/10 dark:hover:border-blue-600 transition-colors 
                        duration-200 ease-in-out"
      onClick={onClick}
    >
      <ExternalLink />
      View project
    </Button>
  );
}
