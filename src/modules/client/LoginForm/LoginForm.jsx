import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <form action="">
        <label htmlFor="" className={styles.label}>
          Email
        </label>
        <input type="email" className={styles.input} />
        <label className={styles.label}>Password</label>
        <input type="password" className={styles.input} />
      </form>
    </>
  );
};

export default LoginForm;
