import styles from "./homepage.module.css";
import Container from "../../shared/components/Container";
import Products from "../../client/Products/Products";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Container>
        <h1 className={styles.title}>Best delivery for you!</h1>
        <Products />
      </Container>
    </div>
  );
};

export default HomePage;
