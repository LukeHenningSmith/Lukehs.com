import type { SkillItem } from "@/types";

export const TS_SKILL = "tsSkill";
export const REACT_SKILL = "reactSkill";
export const PYTHON_SKILL = "pythonSkill";
export const AWS_SKILL = "awsSkill";
export const DOCKER_SKILL = "dockerSkill";

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
    imgSrc: "/tech-icons/docker-logo.svg",
    url: "https://www.docker.com",
  },
};
