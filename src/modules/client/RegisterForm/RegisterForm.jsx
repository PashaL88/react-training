import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <>
      <form action="" className={styles.form}>
        <label htmlFor="" className={styles.label}>
          Mobile phone
        </label>
        <input type="phone" className={styles.input} />
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

export default RegisterForm;
