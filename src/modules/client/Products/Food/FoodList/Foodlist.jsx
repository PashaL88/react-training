import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodList = ({ items }) => {
  const elements = items.map(({ id, thumbnail_url, name }) => (
    <li key={id}>
      <img src={thumbnail_url} alt={name} width="200" height="200" />
      <Link to={`/food/${id}`}>{name}</Link>
    </li>
  ));
  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default FoodList;

FoodList.propTypes = {
  items: PropTypes.array.isRequired,
};
