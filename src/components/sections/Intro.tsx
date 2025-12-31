import type { SkillItem } from "@/types";
import { scrollToId } from "../layout/Header";
import {
  AWS_SKILL,
  DOCKER_SKILL,
  PYTHON_SKILL,
  REACT_SKILL,
  SKILLS,
  TS_SKILL,
} from "../utility/skills/constants";
import { SkillsContainer } from "../utility/skills/SkillsContainer";
import { Section } from "../utility/Section";
import { FadeUp } from "../layout/FadeUp";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

export function Intro({ animationOffset }: { animationOffset?: number }) {
  const skills: SkillItem[] = [
    SKILLS[TS_SKILL],
    SKILLS[REACT_SKILL],
    SKILLS[PYTHON_SKILL],
    SKILLS[AWS_SKILL],
    SKILLS[DOCKER_SKILL],
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
            I have 2 years of experience building full-stack web applications in
            the finance industry as well as many exciting{" "}
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

          <span>
            <i>
              I am also an avid skiier (and recent snowboarder) with a{" "}
              <Button
                variant={"link"}
                onClick={() => scrollToId("skiing")}
                title="Scroll to Skiing section"
                size={null}
                className="text-md"
              >
                bucket list
              </Button>{" "}
              to ski all over the world ⛷️.
            </i>
          </span>
        </div>
      </FadeUp>
    </Section>
  );
}
