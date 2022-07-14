import styles from "./homepage.module.css";
import { useState } from "react";
import items from "../../../data/menu.json";

const HomePage = () => {
  const [buttonActiveIndex, setButtonActiveIndex] = useState(0);

  const handleCLick = (index) => {
    setButtonActiveIndex(index);
  };

  const elements = items.map((item, index) => {
    const className =
      buttonActiveIndex === index ? styles.buttonActive : styles.button;

    return (
      <li
        key={item.id}
        onClick={() => handleCLick(index)}
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
      <h1 className={styles.title}>Best delivery for you!</h1>
      <input className={styles.input} placeholder="search" />
      <ul className={styles.container}>{elements}</ul>
    </div>
  );
};

export default HomePage;
