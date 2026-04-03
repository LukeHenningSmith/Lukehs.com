import { ExternalLink } from "lucide-react";
import { FadeUp } from "../layout/FadeUp";
import { Button } from "../ui/button";
import { Section } from "../utility/Section";

export function Certifications({
  animationOffset,
}: {
  animationOffset?: number;
}) {
  return (
    <Section
      id="certifications"
      title="Certifications"
      animationOffset={animationOffset}
    >
      <FadeUp delay={animationOffset}>
        <div className="flex gap-2 text-muted-foreground">
          <div className="flex mx-2 w-[50px] align-middle justify-center">
            <img
              src="/tech-icons/aws-logo-light.png"
              alt="AWS Logo"
              className="w-[50px] h-auto object-contain block dark:hidden"
            />
            <img
              src="/tech-icons/aws-logo-dark.png"
              alt="AWS Logo"
              className="w-[50px] h-auto object-contain hidden dark:block"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col">
              <div className="text-primary font-bold">
                AWS Certified Developer - Associate
              </div>
              <div className="text-primary">Amazon Web Services (AWS)</div>
              <div>Issued Mar 2026 · Expires Mar 2029</div>
            </div>
          </div>
        </div>

        {/* <FadeUp delay={(animationOffset ?? 0) + ANIMATION_GAP / 2}> */}
        <div className="flex gap-2">
          <div className="flex mx-1 w-[60px] align-middle justify-center" />

          <div className="flex-1 flex flex-col gap-2">
            <div className="mt-2">
              <Button
                variant={"outline"}
                size={"sm"}
                title="View certification"
                className="group relative text-primary border-primary dark:border-primary bg-transparent 
              hover:text-blue-600 hover:bg-blue-600/10 hover:border-blue-600 dark:hover:text-blue-300 
              dark:bg-transparent dark:hover:bg-blue-600/10 dark:hover:border-blue-600 transition-colors 
              duration-200 ease-in-out"
                onClick={() => {
                  const newWindow = window.open(
                    "https://www.credly.com/badges/8dace17e-6b2f-404d-b8a7-43020f336277/public_url",
                    "_blank",
                  );
                  if (newWindow) newWindow.opener = null;
                }}
              >
                <ExternalLink />
                View credential
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
