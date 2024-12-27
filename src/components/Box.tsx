import "./styles/Box.css";

export function Box({
  color = "purple",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={"box " + className}
      style={{ backgroundColor: color }}
    ></div>
  );
}
