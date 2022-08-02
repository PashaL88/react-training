import styles from "./homepage.module.css";
import Products from "../../client/Products/Products";
import { useContext } from "react";
import { langContext } from "../../../langContext";
import locale from "./locale.json";

const HomePage = () => {
  const { lang } = useContext(langContext);

  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>{locale.title[lang]}</h1>
      <Products />
    </div>
  );
};

export default HomePage;
