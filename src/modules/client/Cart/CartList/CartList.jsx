import s from "./cartList.module.css";

const CartList = ({
  products,
  deleteItem,
  clickIncrementBtn,
  clickDecrementBtn,
}) => {
  const elements = products.map(({ name, price, count, id }) => (
    <li key={id} className={s.item}>
      <span className={s.description}>{name},</span>
      <span className={s.price}>{price}$</span>
      <span className={s.count}>{count}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => clickIncrementBtn(id)}
      >
        +
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => clickDecrementBtn(id)}
      >
        -
      </button>
      <button className={s.button} type="button" onClick={() => deleteItem(id)}>
        Delete
      </button>
    </li>
  ));
  return (
    <>{Boolean(products.length) && <ul className={s.list}>{elements}</ul>}</>
  );
};

export default CartList;
