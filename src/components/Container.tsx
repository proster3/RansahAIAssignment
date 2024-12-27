import { Box } from "./Box";
import "./styles/Container.css";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Box className="top-left" color="#1460bd" />
      <Box className="top-right" color="#ff6347" />
      <Box className="bottom-left" color="#ffff01" />
      <Box className="bottom-right" color="#ff0102" />
      {children}
    </div>
  );
}
