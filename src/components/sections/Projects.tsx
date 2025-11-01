import { FadeUp } from "../layout/FadeUp";
import { Section } from "../utility/Section";

export function Projects({ animationOffset }: { animationOffset?: number }) {
  return (
    <Section id="projects" title="Projects" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <span className="text-muted-foreground">Coming soon...</span>
      </FadeUp>
    </Section>
  );
}
