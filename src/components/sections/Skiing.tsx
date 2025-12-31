import { useEffect, useState } from "react";
import { FadeUp } from "../layout/FadeUp";
import { Section } from "../utility/Section";
import { ANIMATION_GAP } from "@/constants";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Kbd, KbdGroup } from "../ui/kbd";
import { useIsDesktop } from "@/hooks/hooks";
import { useSwipeable } from "react-swipeable";

type SkiImage = {
  src: string;
  alt?: string;
  location: string;
  time: string;
};

const IMAGES: SkiImage[] = [
  {
    src: "/skiing-photos/zao_2025.JPG",
    alt: "Ridge",
    location: "Zao Onsen, Japan",
    time: "Jan 2025",
  },
  {
    src: "/skiing-photos/zao_2025_2.JPG",
    alt: "Ridge",
    location: "Zao Onsen, Japan",
    time: "Jan 2025",
  },
  {
    src: "/skiing-photos/myoko_2025.JPG",
    alt: "Ridge",
    location: "Myoko Kogen, Japan",
    time: "Jan 2025",
  },
  {
    src: "/skiing-photos/myoko_2019_jan.JPG",
    alt: "Ridge",
    location: "Myoko Kogen, Japan",
    time: "Jan 2019",
  },
  {
    src: "/skiing-photos/vermont_2017_dec.JPG",
    alt: "Ridge",
    location: "Vermont, USA",
    time: "Dec 2017",
  },
];

const ARROW_BUTTON_STYLE =
  "z-20 mx-2 text-secondary hover:text-muted-foreground bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent dark:text-primary dark:hover:text-muted-foreground";

export function Skiing({ animationOffset }: { animationOffset?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 for next, -1 for prev
  const isDesktop = useIsDesktop();

  const handleOpen = (i: number) => setOpenIndex(i);
  const handleClose = () => setOpenIndex(null);

  const handleNextImage = () => {
    if (openIndex !== null && openIndex < IMAGES.length - 1) {
      setDirection(1);
      handleOpen(openIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (openIndex !== null && openIndex > 0) {
      setDirection(-1);
      handleOpen(openIndex - 1);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      e.preventDefault();
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowLeft") handlePrevImage();
      else if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  // disable body scroll when modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = openIndex !== null ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") handleNextImage();
      else if (eventData.dir === "Right") handlePrevImage();
      else handleClose();
    },
  });

  return (
    <Section id="skiing" title="Skiing" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <p className="my-2 text-muted-foreground">
          Lifelong skiier - recent snowboarder. Some of my favourite places I
          have visited:
        </p>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {IMAGES.map((img, i) => (
          <FadeUp
            delay={(animationOffset ?? 0) + (ANIMATION_GAP / IMAGES.length) * i}
            key={img.src}
          >
            <div
              className="group relative h-40 sm:h-56 w-full overflow-hidden rounded-sm 
                cursor-pointer hover:scale-101 transition-transform duration-300"
              onClick={() => handleOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOpen(i);
              }}
            >
              <img
                src={img.src}
                alt={img.alt ?? img.location}
                className="w-full h-full object-cover transform transition-transform duration-300"
                loading="lazy"
              />

              {/* bottom gradient and info */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 
              to-transparent pointer-events-none"
              />

              <div
                className="absolute left-3 bottom-3 text-white z-10 pointer-events-none 
                  opacity-0 translate-y-1 group-hover:opacity-100 group-focus:opacity-100 
                  group-hover:translate-y-0 group-focus:translate-y-0 transition-opacity 
                  transition-transform duration-200 ease-in-out"
              >
                <div className="text-sm font-semibold drop-shadow flex items-center gap-1">
                  <MapPin size={14} />
                  {img.location}
                </div>

                <div className="text-xs opacity-90 drop-shadow text-secondary dark:text-muted-foreground">
                  {img.time}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Modal / lightbox for enlarged image (framer-motion: opening + closing) */}
      <AnimatePresence initial={false} mode="wait">
        {openIndex !== null && (
          <motion.div
            key="ski-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              variant={"ghost"}
              className={ARROW_BUTTON_STYLE}
              size={"icon-lg"}
              disabled={openIndex === 0}
            >
              <ArrowLeft />
            </Button>

            {/* Modal content */}
            <motion.div
              className="relative rounded-sm overflow-hidden bg-[#2D2D2D] z-10"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, y: 8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 8, opacity: 0 }}
              transition={{
                duration: 0.22,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              {...swipeHandlers}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={openIndex}
                  src={IMAGES[openIndex].src}
                  alt={IMAGES[openIndex].alt ?? IMAGES[openIndex].location}
                  className="w-full w-[80vw] max-h-[70vh]"
                  variants={{
                    enter: (custom: number) => ({
                      x: custom > 0 ? 300 : -300,
                      opacity: 0,
                    }),
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                  transition={{
                    x: { type: "spring", stiffness: 400, damping: 40 },
                    opacity: { duration: 0.1 },
                  }}
                />
              </AnimatePresence>

              <Button
                variant={"ghost"}
                size={"icon"}
                className="absolute right-3 top-3 text-secondary hover:text-muted-foreground bg-transparent 
              hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent dark:text-primary dark:hover:text-muted-foreground"
                onClick={handleClose}
                aria-label="Close enlarged image"
              >
                ✕
              </Button>

              <div className="p-4 bg-[#2D2D2D] opacity-70 text-white flex flex-col gap-0.5">
                <div className="text-lg font-semibold flex items-center gap-1">
                  <MapPin size={18} />
                  {IMAGES[openIndex].location}
                </div>

                <div className="flex justify-between text-sm opacity-80 text-[#cccccc]">
                  <div>{IMAGES[openIndex].time}</div>

                  {isDesktop && (
                    <div className="flex flex-col items-center gap-4">
                      <p className="text-sm">
                        Use{" "}
                        <KbdGroup>
                          <Kbd
                            children="<"
                            className="text-black dark:text-white"
                          />
                          <Kbd
                            children=">"
                            className="text-black dark:text-white"
                          />
                        </KbdGroup>{" "}
                        keys to switch image
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              variant={"ghost"}
              className={ARROW_BUTTON_STYLE}
              size={"icon-lg"}
              disabled={openIndex === IMAGES.length - 1}
            >
              <ArrowRight />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <FadeUp delay={(animationOffset ?? 0) + ANIMATION_GAP}>
        <div className="mt-4">
          <h3 className="text-primary mb-2">My skiing bucket list:</h3>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Dolomites, Italy</li>
            <li>Val Thorens, France</li>
            <li>Mt Hutt, New Zealand</li>
            <li>St Moritz, Switzerland</li>
            <li>
              <i>Heli-skiing - anywhere</i>
            </li>
          </ul>
        </div>
      </FadeUp>
    </Section>
  );
}
