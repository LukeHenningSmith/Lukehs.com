// TODO: Need to make a few improvements to these:
// 1. Smoother line drawing (less speed up / slow down)
// 2. More lines + some on left
// 3. Smoother curves
const paths: string[] = [
  "M 0 50 C 170 80 130 160 80 310 C 60 400 250 500 80 680 C 5 750 150 820 150 880 C 153 940 100 980 100 1000",
  "M 0 150 C 170 180 130 260 80 410 C 60 500 250 600 80 780 C 5 850 150 920 150 980 C 153 1100 100 1100 100 1100",
];

export default function SkiTracks() {
  return (
    <div className="ski-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ski-svg"
      >
        {paths.map((d, i) => (
          <g
            className="track"
            key={i}
            // set a CSS variable so child paths can pick up the delay (animation-delay doesn't inherit)
            style={{ ["--delay" as any]: `${i * 2.18}s` }}
          >
            <path className="track-line" d={d} />
            <path
              className="track-line track-line--offset"
              d={d}
              // make the offset line start slightly after its partner for a natural look
              style={{ ["--delay" as any]: `${i * 2.19}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
