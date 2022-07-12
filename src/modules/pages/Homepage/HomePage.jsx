import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Best delivery for you!</h1>
      <input className={styles.input} placeholder="search" />
      <div className={styles.container}>
        <button className={styles.button}>Food</button>
        <button className={styles.button}>Drink</button>
        <button className={styles.button}>Snacks</button>
        <button className={styles.button}>Deserts</button>
      </div>
    </div>
  );
};

export default HomePage;
