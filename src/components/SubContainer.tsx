import { Box } from "./Box";
import "./styles/SubContainer.css";

export function SubContainer({
  children,
  colorCode = 0,
}: {
  children?: React.ReactNode;
  colorCode: number;
}) {
  const colorCombinations = [
    ["#f56fa0", "#00baff", "#cc061e", "#524000"],
    ["#d90b54", "#ff3801", "#ffa913", "#01153e"],
  ];
  return (
    <div className="sub-container">
      <Box color={colorCombinations[colorCode][0]} />
      <Box color={colorCombinations[colorCode][1]} />
      <Box color={colorCombinations[colorCode][2]} />
      <Box color={colorCombinations[colorCode][3]} />
      {children}
    </div>
  );
}
