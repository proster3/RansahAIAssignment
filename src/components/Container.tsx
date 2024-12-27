import "./styles/Container.css";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>;
}
