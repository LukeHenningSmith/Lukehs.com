const paths: string[] = [
  "M 0 50 C 24 130 60 160 110 190 C 170 230 140 320 120 400 C 110 520 150 620 140 720 C 130 820 125 880 120 1000",
  "M 0 150 C 30 140 80 170 140 200 C 210 250 180 360 160 470 C 150 560 160 650 180 740 C 200 840 210 900 200 1000",
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
