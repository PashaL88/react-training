import styles from "./homepage.module.css";
import { useState } from "react";
import items from "../../../data/menu.json";
import Container from "../../shared/components/Container";
import Food from "../../shared/components/Food/Food";

const HomePage = () => {
  const [buttonActiveIndex, setButtonActiveIndex] = useState(0);

  const elements = items.map((item, index) => {
    const className =
      buttonActiveIndex === index ? styles.buttonActive : styles.button;

    return (
      <li
        key={item.id}
        onClick={() => setButtonActiveIndex(index)}
        className={styles.item}
      >
        <a href={item.link} className={className}>
          {item.text}
        </a>
      </li>
    );
  });

  return (
    <div className={styles.homepage}>
      <Container>
        <h1 className={styles.title}>Best delivery for you!</h1>
        <input className={styles.input} placeholder="search" />
        <ul className={styles.container}>{elements}</ul>
        {buttonActiveIndex === 0 && <Food />}
      </Container>
    </div>
  );
};

export default HomePage;
