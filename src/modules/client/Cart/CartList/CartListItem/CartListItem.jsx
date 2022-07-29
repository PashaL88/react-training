import s from "./CartListItem.module.css";
import { memo } from "react";
const CartListItem = ({
  id,
  name,
  price,
  count,
  clickIncrementBtn,
  clickDecrementBtn,
  deleteItem,
}) => {
  return (
    <li className={s.item}>
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
  );
};

export default memo(CartListItem);
