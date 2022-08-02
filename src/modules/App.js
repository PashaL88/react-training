import Header from "./client/Header";
import Routes from "./Routes";
import LangContext from "../langContext";
import Container from "../shared/components/Container";

function App() {
  return (
    <LangContext>
      <Container>
        <Header />
        <Routes />
      </Container>
    </LangContext>
  );
}

export default App;
