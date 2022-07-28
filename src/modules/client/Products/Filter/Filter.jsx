import styles from "./filter.module.css";
import Search from "../../../../shared/SVG/Search.svg";

const Filter = ({ changeFilter, filter }) => {
  return (
    <div className={styles.filter}>
      <img className={styles.img} src={Search} alt="Search" />
      <input
        className={styles.input}
        onChange={changeFilter}
        type="text"
        value={filter}
        name="filter"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default Filter;
