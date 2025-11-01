import { FadeUp } from "../layout/FadeUp";
import { Section } from "../utility/Section";

export function Education({ animationOffset }: { animationOffset?: number }) {
  return (
    <Section id="education" title="Education" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <div className="flex gap-2 text-muted-foreground">
          <div className="flex mx-2 w-[50px] align-middle justify-center">
            <img
              src="/usyd-logo-light.png"
              alt="Logo"
              className="w-[50px] h-auto object-contain block dark:hidden"
            />
            <img
              src="/usyd-logo-dark.png"
              alt="Logo"
              className="w-[50px] h-auto object-contain hidden dark:block"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col">
              <div className="text-primary font-bold">University of Sydney</div>
              <div className="text-primary">
                Bachelor of Engineering Honours (Software Engineering) and
                Bachelor of Science (Chemistry)
              </div>
              <div>2019 - 2024</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex mx-1 w-[60px] align-middle justify-center"></div>

          <div className="flex-1">
            Grade: Honours Class I and the University Medal
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
