import { useState } from "react";
import { items } from "./items";
import s from "./cart.module.css";
// import { langContext } from "../../../langContext";

import CartList from "./CartList";

const Cart = () => {
  // const { lang } = useContext(langContext);
  const [products, setProducts] = useState([...items]);

  const calcTotalPrice = () => {
    const total = products.reduce(
      (acum, item) => acum + item.price * item.count,
      0
    );
    return total;
  };

  const clickIncrementBtn = (id) => {
    products.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    });
    setProducts((prevState) => {
      return [...prevState];
    });
  };

  const clickDecrementBtn = (id) => {
    products.forEach((item) => {
      if (item.id === id) {
        item.count -= 1;
      }
      return item;
    });
    setProducts((prevState) => {
      return [...prevState];
    });
  };

  const deleteItem = (id) => {
    setProducts((prevState) => prevState.filter((item) => item.id !== id));
  };

  const totalPrice = calcTotalPrice();

  const filteredProducts = products.filter((el) => el.count);

  return (
    <>
      {/* {products.length && <ul className={s.list}>{elements}</ul>} */}
      <CartList
        products={filteredProducts}
        deleteItem={deleteItem}
        clickIncrementBtn={clickIncrementBtn}
        clickDecrementBtn={clickDecrementBtn}
      />
      <p className={s.total}>Total price:{totalPrice}$</p>
    </>
  );
};

export default Cart;
