import type { SkillItem } from "@/types";
import { SkillButton } from "./SkillButton";

export function SkillsContainer({ skills }: { skills: SkillItem[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillButton skill={skill} key={skill.id} />
      ))}
    </div>
  );
}
