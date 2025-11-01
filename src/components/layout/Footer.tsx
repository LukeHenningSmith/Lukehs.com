import { FadeUp } from "./FadeUp";

export function Footer({ animationOffset }: { animationOffset?: number }) {
  return (
    <FadeUp delay={animationOffset}>
      <footer className="w-full py-10 flex justify-center">
        <span className="text-sm text-muted-foreground">
          © 2025 Luke Henning-Smith
        </span>
      </footer>
    </FadeUp>
  );
}
