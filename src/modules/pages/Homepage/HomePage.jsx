import styles from "./homepage.module.css";
import Container from "../../../shared/components/Container";
import Products from "../../client/Products/Products";
import { useContext } from "react";
import { langContext } from "../../../langContext";
import locale from "./locale.json";

const HomePage = () => {
  const { lang } = useContext(langContext);

  return (
    <div className={styles.homepage}>
      <Container>
        <h1 className={styles.title}>{locale.title[lang]}</h1>
        <Products />
      </Container>
    </div>
  );
};

export default HomePage;
