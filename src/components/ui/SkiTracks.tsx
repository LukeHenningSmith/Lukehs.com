const paths: string[] = [
  // left -> right sweeping curves (viewBox 0 0 1000 1000)
  "M -150 120 C 180 160 420 340 1100 520",
  "M -150 260 C 200 220 420 420 1100 600",
  "M -150 420 C 150 480 520 560 1100 720",
  "M -150 580 C 240 620 640 420 1100 400",
  "M -150 740 C 280 700 720 820 1100 900",
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
            style={{ animationDelay: `${i * 1.1}s` }}
          >
            <path className="track-line" d={d} />
            <path className="track-line track-line--offset" d={d} />
          </g>
        ))}
      </svg>
    </div>
  );
}
