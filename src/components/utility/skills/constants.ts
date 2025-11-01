import type { SkillItem } from "@/types";

export const TS_SKILL = "tsSkill";
export const REACT_SKILL = "reactSkill";
export const PYTHON_SKILL = "pythonSkill";
export const AWS_SKILL = "awsSkill";
export const DOCKER_SKILL = "dockerSkill";
export const TAILWINDCSS_SKILL = "tailwindcssSkill";
export const VITEST_SKILL = "vitestSkill";
export const VITE_SKILL = "viteSkill";

export const SKILLS: Record<string, SkillItem> = {
  [TS_SKILL]: {
    id: "ts",
    label: "TypeScript",
    imgSrc: "/tech-icons/typescript-logo.png",
    url: "https://www.typescriptlang.org",
  },
  [REACT_SKILL]: {
    id: "react",
    label: "React",
    imgSrc: "/tech-icons/react-logo.png",
    url: "https://reactjs.org",
  },
  [PYTHON_SKILL]: {
    id: "python",
    label: "Python",
    imgSrc: "/tech-icons/python-logo.svg",
    url: "https://www.python.org",
  },
  [AWS_SKILL]: {
    id: "aws",
    label: "AWS",
    imgSrc: "/tech-icons/aws-logo.png",
    url: "https://aws.amazon.com",
  },
  [DOCKER_SKILL]: {
    id: "docker",
    label: "Docker",
    imgSrc: "/tech-icons/docker-logo.png",
    url: "https://www.docker.com",
  },
  [TAILWINDCSS_SKILL]: {
    id: "tailwindcss",
    label: "TailwindCSS",
    imgSrc: "/tech-icons/tailwindcss-logo.png",
    url: "https://tailwindcss.com",
  },
  [VITE_SKILL]: {
    id: "vite",
    label: "Vite",
    imgSrc: "/tech-icons/vite-logo.png",
    url: "https://vite.dev/",
  },
  [VITEST_SKILL]: {
    id: "vitest",
    label: "Vitest",
    imgSrc: "/tech-icons/vitest-logo.svg",
    url: "https://vitest.dev/",
  },
};
