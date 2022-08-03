import { useState, useEffect } from "react";
import { fetchFood } from "../../../../shared/services/fetch";
import FoodList from "./FoodList/Foodlist";

const Food = ({ getFilteredProducts }) => {
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

  const filteredItems = getFilteredProducts(items[1]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {Boolean(items.length) && <FoodList items={filteredItems} />}
    </>
  );
};

export default Food;
