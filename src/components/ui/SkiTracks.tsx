const paths: string[] = [
  "M 1050 200 C 1000 220 800 270 950 300 C 1000 310 920 450 850 500 C 800 550 920 600 900 670 C 890 700 790 750 1050 950",
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
            style={{ ["--delay" as any]: `${i * 1.18}s` }}
          >
            <path className="track-line" d={d} />
            <path
              className="track-line track-line--offset"
              d={d}
              // make the offset line start slightly after its partner for a natural look
              style={{ ["--delay" as any]: `${i * 1.19}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
