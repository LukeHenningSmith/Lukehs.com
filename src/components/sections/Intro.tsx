import type { SkillItem } from "@/types";
import { scrollToId } from "../layout/Header";
import {
  AWS_SKILL,
  NEXTJS_SKILL,
  PYTHON_SKILL,
  REACT_SKILL,
  SKILLS,
  TS_SKILL,
} from "../utility/skills/constants";
import { SkillsContainer } from "../utility/skills/SkillsContainer";
import { Section } from "../utility/Section";
import { FadeUp } from "../layout/FadeUp";
import { Button } from "../ui/button";

export function Intro({ animationOffset }: { animationOffset?: number }) {
  const skills: SkillItem[] = [
    SKILLS[TS_SKILL],
    SKILLS[PYTHON_SKILL],
    SKILLS[AWS_SKILL],
    SKILLS[NEXTJS_SKILL],
    SKILLS[REACT_SKILL],
  ];

  return (
    <Section id="intro" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <div className="flex flex-col gap-4 text-base text-muted-foreground">
          <span>
            Hey I'm Luke, a{" "}
            <Button
              variant={"link"}
              onClick={() => scrollToId("experience")}
              title="Scroll to Experience section"
              size={null}
              className="text-md"
            >
              software engineer
            </Button>{" "}
            and{" "}
            <Button
              variant={"link"}
              onClick={() => scrollToId("skiing")}
              title="Scroll to Skiing section"
              size={null}
              className="text-md"
            >
              skier
            </Button>{" "}
            from Sydney, Australia.
          </span>

          <span>
            I have 2 years+ experience building web applications in the finance
            industry, as well as many exciting{" "}
            <Button
              variant={"link"}
              onClick={() => scrollToId("projects")}
              title="Scroll to Projects section"
              size={null}
              className="text-md"
            >
              personal projects
            </Button>
            .
          </span>

          <span>The technologies I am most experienced with are:</span>
          <SkillsContainer skills={skills} />
        </div>
      </FadeUp>
    </Section>
  );
}
