import type { ReactNode } from "react";
import { Intro } from "../sections/Intro";
import { Experience } from "../sections/Experience";
import { Education } from "../sections/Education";
import { Projects } from "../sections/Projects";
import { Skiing } from "../sections/Skiing";
import CascadingContent from "./CascadingContent";
import { Title } from "../sections/Title";

export function PageContainer() {
  const pageContent: ReactNode[] = [
    <Intro />,
    <Experience />,
    <Education />,
    <Projects />,
    <Skiing />,
  ];

  return (
    <main className="flex-1 flex justify-center py-16 overflow-y-auto px-10">
      <div className="w-full max-w-4xl space-y-12">
        <Title />
        <CascadingContent content={pageContent} />
      </div>
    </main>
  );
}
