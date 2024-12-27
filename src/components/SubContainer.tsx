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
    ["pink", "skyblue", "red", "brown"],
    ["red", "orange", "lightorange", "black"],
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