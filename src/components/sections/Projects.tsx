import type { SkillItem } from "@/types";
import { FadeUp } from "../layout/FadeUp";
import { Section } from "../utility/Section";
import { SkillsContainer } from "../utility/skills/SkillsContainer";
import {
  SKILLS,
  REACT_SKILL,
  TS_SKILL,
  TAILWINDCSS_SKILL,
  VITEST_SKILL,
  VITE_SKILL,
} from "../utility/skills/constants";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

export function Projects({ animationOffset }: { animationOffset?: number }) {
  const skills: SkillItem[] = [
    SKILLS[TS_SKILL],
    SKILLS[REACT_SKILL],
    SKILLS[VITE_SKILL],
    SKILLS[VITEST_SKILL],
    SKILLS[TAILWINDCSS_SKILL],
  ];

  return (
    <Section id="projects" title="Projects" animationOffset={animationOffset}>
      {/* WYD project */}
      <FadeUp delay={animationOffset}>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <div className="flex gap-2">
            <div className="flex mx-2 w-[50px] items-center justify-center">
              <img
                className="w-[50px] h-auto object-contain"
                src="/cba-logo.png"
                alt="Commonwealth Bank logo"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col">
                <div className="text-primary font-bold">WYD?</div>
                <div className="text-primary">Google Chrome Extension</div>
                <div>2024</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pl-18">
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>
                A Chrome extension designed to help users reflect on their daily
                browsing and bookmark habits by providing clear and insightful
                metrics in an aesthetic dashboard
              </li>
              <li>
                Exciting and insightful visualisations supported by{" "}
                <Button
                  variant={"link"}
                  size={null}
                  className="cursor-pointer"
                  onClick={() => {
                    const newWindow = window.open(
                      "https://ui.shadcn.com/",
                      "_blank"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  shadcn
                </Button>{" "}
                and{" "}
                <Button
                  variant={"link"}
                  size={null}
                  className="cursor-pointer"
                  onClick={() => {
                    const newWindow = window.open(
                      "https://tailwindcss.com/",
                      "_blank"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  TailwindCSS
                </Button>
              </li>
              <li>
                Network response caching for seamless UX and refresh using{" "}
                <Button
                  variant={"link"}
                  size={null}
                  className="cursor-pointer"
                  onClick={() => {
                    const newWindow = window.open(
                      "https://tanstack.com/query",
                      "_blank"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Tanstack-Query
                </Button>
              </li>
              <li>
                Renders 10,000+ row tables nearly instantly using virtualisation
                using{" "}
                <Button
                  variant={"link"}
                  size={null}
                  className="cursor-pointer"
                  onClick={() => {
                    const newWindow = window.open(
                      "https://github.com/bvaughn/react-window",
                      "_blank"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  react-window
                </Button>
              </li>
              <li>
                Comprehensive test suite built using{" "}
                <Button
                  variant={"link"}
                  size={null}
                  className="cursor-pointer"
                  onClick={() => {
                    const newWindow = window.open(
                      "https://vitest.dev/",
                      "_blank"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Vitest
                </Button>
              </li>
            </ul>

            <div className="my-2">
              <SkillsContainer skills={skills} />
            </div>

            <div>
              <Button
                variant={"outline"}
                size={"sm"}
                title="View source code on GitHub"
                className="cursor-pointer text-muted-foreground bg-transparent 
                hover:text-[#F05033] hover:bg-[#F05033]/10
                hover:border-[#F05033] dark:hover:text-[#F05033] dark:bg-transparent 
                dark:hover:bg-[#F05033]/10 dark:hover:border-[#F05033] transition-colors duration-200 ease-in-out"
                onClick={() => {
                  const newWindow = window.open(
                    "https://github.com/LukeHenningSmith/wyd",
                    "_blank"
                  );
                  if (newWindow) newWindow.opener = null;
                }}
              >
                <Github />
                Source code
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
