import type { Skill } from "@/types";
import { Button } from "@/components/ui/button";

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Button
          id={skill.id}
          key={skill.id}
          variant={"default"}
          size={"sm"}
          className="cursor-pointer dark:bg-secondary bg-[oklch(0.92_0_0)] text-muted-foreground hover:text-primary hover:bg-secondary hover:bg-[oklch(0.94_0_0)]"
          onClick={() => {
            const newWindow = window.open(skill.url, "_blank");
            if (newWindow) newWindow.opener = null;
          }}
        >
          <img src={skill.imgSrc} width={20} />
          {skill.label}
        </Button>
      ))}
    </div>
  );
}
