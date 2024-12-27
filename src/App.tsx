import "./App.css";
import { Container } from "./components/Container";
import { SubContainer } from "./components/SubContainer";

const App = () => {
  return (
    <Container>
      <SubContainer colorCode={0} />
      <SubContainer colorCode={1} />
    </Container>
  );
};

export default App;
