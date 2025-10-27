import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { Intro } from "../sections/Intro";
import { Experience } from "../sections/Experience";
import { Education } from "../sections/Education";
import { Projects } from "../sections/Projects";
import { Skiing } from "../sections/Skiing";
import CascadingContent from "./CascadingContent";

export function PageContainer() {
  const pageContent: ReactNode[] = [
    <Intro />,
    <Experience />,
    <Education />,
    <Projects />,
    <Skiing />,
  ];

  return (
    <main className="flex-1 flex justify-center py-16 overflow-y-auto px-8">
      <div className="w-full max-w-4xl space-y-12">
        <div className="w-full max-w-4xl space-y-2">
          <h1 className="text-4xl font-bold">Luke Henning-Smith</h1>
          <h2 className="text-xl text-muted-foreground">Software Engineer</h2>
          <p className="text-sm italic flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            Sydney, Australia
          </p>
        </div>

        <CascadingContent content={pageContent} />
      </div>
    </main>
  );
}
