import s from "./cartPage.module.css";
import Container from "../../shared/components/Container";
import Cart from "../../client/Cart";
const CartPage = () => {
  return (
    <Container>
      <h2 className={s.title}>Cart</h2>
      <Cart />
    </Container>
  );
};
export default CartPage;
