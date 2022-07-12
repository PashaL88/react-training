// import { Routes } from "react-router-dom";
import styles from "./App.module.css";

import Header from "./modules/Header";
import Routes from "./modules/Routes";
// import Product from "./modules/Product/Product";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
