const FoodList = ({ items }) => {
  console.log(items);
  const elements = items.map((item, id) => (
    <li key={id}>
      <img src={item.thumbnail_url} alt={item.name} width="200" height="200" />
    </li>
  ));
  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default FoodList;
