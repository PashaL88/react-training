import s from "./cartPage.module.css";
import Container from "../../../shared/components/Container";
import Cart from "../../client/Cart";
import locale from "./locale.json";
import { useContext } from "react";
import { langContext } from "../../../langContext";
const CartPage = () => {
  const { lang } = useContext(langContext);
  return (
    <Container>
      <h2 className={s.title}>{locale.cart[lang]}</h2>
      <Cart />
    </Container>
  );
};
export default CartPage;
