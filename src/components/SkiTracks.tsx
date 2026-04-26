import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function SkiTracks() {
  const [showSkiTracks, setShowSkiTracks] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setShowSkiTracks(window.innerWidth >= 960);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pathLength = 1200;
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const drawProgress = useTransform(smoothProgress, [0, 1], [pathLength, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  const skiPath =
    "M 1000 200 C 1000 220 800 270 950 300 C 1000 310 920 450 850 500 C 800 550 920 600 900 670 C 890 700 790 750 1050 950";

  return (
    <div ref={containerRef} className="ski-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ski-svg"
      >
        <g className="track">
          {showSkiTracks && (
            <>
              <motion.path
                className="track-line"
                d={skiPath}
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: drawProgress,
                  opacity,
                }}
              />
              <motion.path
                className="track-line track-line--offset"
                d={skiPath}
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: drawProgress,
                  opacity: 0.25,
                }}
              />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
