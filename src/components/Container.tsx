import { Box } from "./Box";
import "./styles/Container.css";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Box className="top-left" color="darkblue" />
      <Box className="top-right" color="orange" />
      <Box className="bottom-left" color="yellow" />
      <Box className="bottom-right" color="red" />
      {children}
    </div>
  );
}
