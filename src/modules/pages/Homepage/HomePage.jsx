import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1>Best delivery for you!</h1>
      <input className={styles.input} />

      <button className={styles.button}>Food</button>
      <button className={styles.button}>Drink</button>
      <button className={styles.button}>Snacks</button>
      <button className={styles.button}>Deserts</button>
    </div>
  );
};

export default HomePage;
