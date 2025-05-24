export default function SectionDivider({
  color = "#ffffff",
  height = 50,
  reverse = false,
  className = "",
}) {
  return (
    <div
      className={`${reverse ? "rotate-180" : ""} ${className}`}
      style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}
    >
      <svg
        viewBox={`0 0 500 ${height}`}
        preserveAspectRatio="none"
        style={{ width: "100%", height: `${height}px`, display: "block" }}
      >
        <polygon points={`0,0 500,0 0,${height}`} fill={color} />
      </svg>
    </div>
  );
}
