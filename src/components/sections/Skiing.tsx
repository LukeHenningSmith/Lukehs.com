import { FadeUp } from "../layout/FadeUp";
import { Section } from "../utility/Section";

export function Skiing({ animationOffset }: { animationOffset?: number }) {
  return (
    <Section id="skiing" title="Skiing" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <span className="text-muted-foreground">Coming soon...</span>
      </FadeUp>
    </Section>
  );
}
