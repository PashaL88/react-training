import items from "../../../data/menu.json";
import styles from "./Products.module.css";
import { useState } from "react";
import Food from "./Food";
import Filter from "./Filter";

const Products = () => {
  const [buttonActiveIndex, setButtonActiveIndex] = useState(null);
  const [filter, setFilter] = useState("");

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredProducts = (products) => {
    const filterText = filter.toLowerCase();
    if (products) {
      const filteredProducts = products.filter(({ name }) => {
        const result = name.toLowerCase().includes(filterText);
        console.log(result);
        return result;
      });
      return filteredProducts;
    }
  };

  const elements = items.map((item, index) => {
    const className =
      buttonActiveIndex === index ? styles.buttonActive : styles.button;
    return (
      <li
        key={item.id}
        onClick={() => setButtonActiveIndex(index)}
        className={styles.item}
      >
        <a href={item.link} className={className}>
          {item.text}
        </a>
      </li>
    );
  });
  return (
    <>
      <Filter changeFilter={changeFilter} filter={filter} />
      <ul className={styles.container}>{elements}</ul>
      {buttonActiveIndex === 0 && (
        <Food getFilteredProducts={getFilteredProducts} />
      )}
    </>
  );
};

export default Products;
