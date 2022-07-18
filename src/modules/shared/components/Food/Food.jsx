import { useState, useEffect } from "react";
import { fetchFood } from "../../services/fetch";
import FoodList from "./FoodList/Foodlist";

const Food = () => {
  const [food, setFood] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const getFood = async () => {
      setFood({
        ...food,
        loading: true,
        error: null,
      });
      try {
        const items = await fetchFood();
        setFood((prevState) => ({
          ...prevState,
          items: [...prevState.items, items.results],
          loading: false,
        }));
      } catch (error) {
        setFood((prevState) => ({
          ...food,
          loading: false,
          error: error.message,
        }));
      }
    };
    getFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { items, loading } = food;
  console.log(items);

  return (
    <>
      {loading && <p>Loading...</p>}
      {Boolean(items.length) && <FoodList items={items[0]} />}
    </>
  );
};

export default Food;
