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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
            Hey I'm Luke, a software engineer and skiing fanatic from Sydney,
            Australia{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span>🇦🇺</span>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="center">
                Australia
              </TooltipContent>
            </Tooltip>
            .
          </span>

          <span>
            I have spent the past 2 years building business critical full-stack
            web applications in the finance industry, along with a few exciting{" "}
            <u
              className="hover:text-primary cursor-pointer"
              onClick={() => scrollToId("projects")}
              title="Scroll to Projects section"
            >
              personal projects
            </u>
            . The technologies I am most experienced with are:
          </span>

          <SkillsContainer skills={skills} />

          <span>
            <i>
              I am also an avid skiier (and recent snowboarder) with a{" "}
              <u
                className="hover:text-primary cursor-pointer"
                onClick={() => scrollToId("skiing")}
                title="Scroll to Skiing section"
              >
                bucket list
              </u>{" "}
              to ski all over the world ⛷️.
            </i>
          </span>
        </div>
      </FadeUp>
    </Section>
  );
}
