import styles from "./App.module.css";
import Header from "./client/Header";
import Routes from "./Routes";
import LangContext from "../langContext";

function App() {
  return (
    <LangContext>
      <div className={styles.container}>
        <Header />
        <Routes />
      </div>
    </LangContext>
  );
}

export default App;
