import { type ReactNode } from "react";
import LinkableHeading from "../LinkableHeading";
import { FadeUp } from "../layout/FadeUp";

export function Section({
  id,
  title,
  animationOffset,
  children,
}: {
  id: string;
  title?: string;
  animationOffset?: number;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <FadeUp delay={animationOffset}>
        {title && <LinkableHeading id={id}>{title}</LinkableHeading>}
      </FadeUp>

      {children}
    </div>
  );
}
