import type { SkillItem } from "@/types";
import { scrollToId } from "../layout/Header";
import {
  AWS_SKILL,
  PYTHON_SKILL,
  REACT_SKILL,
  SKILLS,
  TS_SKILL,
} from "../utility/skills/constants";
import { SkillsContainer } from "../utility/skills/SkillsContainer";
import { Section } from "../utility/Section";
import { FadeUp } from "../layout/FadeUp";

export function Intro({ animationOffset }: { animationOffset?: number }) {
  const skills: SkillItem[] = [
    SKILLS[TS_SKILL],
    SKILLS[REACT_SKILL],
    SKILLS[PYTHON_SKILL],
    SKILLS[AWS_SKILL],
  ];

  return (
    <Section id="intro" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <div className="flex flex-col gap-4 text-base text-muted-foreground">
          <span>
            Hi! I'm Luke, a software engineer from Sydney with 2 years
            experience building fullstack web applications in the finance
            industry. The technologies I am most experienced with are:
          </span>

          <SkillsContainer skills={skills} />

          <span className="mt-2">
            <i>
              I am also an avid skiier with a{" "}
              <u
                className="hover:text-primary cursor-pointer"
                onClick={() => scrollToId("skiing")}
              >
                bucket list
              </u>{" "}
              to ski all over the world.
            </i>
          </span>
        </div>
      </FadeUp>
    </Section>
  );
}
