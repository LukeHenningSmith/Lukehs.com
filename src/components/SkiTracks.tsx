export default function SkiTracks() {
  const skiPath =
    "M 1000 200 C 1000 220 800 270 950 300 C 1000 310 920 450 850 500 C 800 550 920 600 900 670 C 890 700 790 750 1050 950";

  return (
    <div className="ski-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ski-svg"
      >
        <g className="track">
          <path className="track-line" d={skiPath} />
          <path className="track-line track-line--offset" d={skiPath} />
        </g>
      </svg>
    </div>
  );
}
