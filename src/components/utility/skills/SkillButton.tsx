import { Button } from "@/components/ui/button";
import type { SkillItem } from "@/types";

export function SkillButton({ skill }: { skill: SkillItem }) {
  return (
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
      {skill.imgSrcDark ? (
        <>
          <img
            src={skill.imgSrc}
            alt="Logo"
            className="block dark:hidden"
            width={20}
          />
          <img
            src={skill.imgSrcDark}
            alt="Logo"
            className="hidden dark:block"
            width={20}
          />
        </>
      ) : (
        <img src={skill.imgSrc} width={20} />
      )}

      {skill.label}
    </Button>
  );
}
