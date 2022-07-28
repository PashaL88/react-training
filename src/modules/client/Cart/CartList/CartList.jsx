import s from "./cartList.module.css";
import CartListItem from "./CartListItem/CartListItem";

const CartList = ({
  products,
  deleteItem,
  clickIncrementBtn,
  clickDecrementBtn,
}) => {
  const elements = products.map((item) => (
    <CartListItem
      key={item.id}
      deleteItem={deleteItem}
      clickIncrementBtn={clickIncrementBtn}
      clickDecrementBtn={clickDecrementBtn}
      {...item}
    />
  ));

  return (
    <>{Boolean(products.length) && <ul className={s.list}>{elements}</ul>}</>
  );
};

export default CartList;
