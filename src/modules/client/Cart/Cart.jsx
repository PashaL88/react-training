import { useState } from "react";
import { items } from "./items";
import s from "./cart.module.css";

const Cart = () => {
  const [products, setProducts] = useState([...items]);

  const calcTotalPrice = () => {
    const total = products.reduce(
      (acum, item) => acum + item.price * item.count,
      0
    );
    return total;
  };

  const clickIncrementBtn = (id) => {
    setProducts((prevState) => {
      const product = prevState.find((item) => item.id === id);
      product.count += 1;
      //   prevState.map((item) => ({
      //     ...item,
      //     count: item.id === id ? (item.count += 1) : item.count,
      //   }));
      return [...products, product];
    });
  };

  const deleteItem = (id) => {
    setProducts((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const elements = items.map(({ name, price, count, id }) => (
    <li key={id} className={s.item}>
      <span className={s.description}>{name},</span>
      <span className={s.price}>{price}$</span>
      <span className={s.count}>{count}</span>
      <button className={s.button} onClick={() => clickIncrementBtn(id)}>
        +
      </button>
      <button className={s.button}>-</button>
      <button className={s.button} onClick={() => deleteItem(id)}>
        Delete
      </button>
    </li>
  ));

  const totalPrice = calcTotalPrice();

  return (
    <>
      <ul className={s.list}>{elements}</ul>
      <p className={s.total}>Total price:{totalPrice}$</p>
    </>
  );
};

export default Cart;
