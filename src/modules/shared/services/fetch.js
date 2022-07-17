const axios = require("axios");

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: { from: "0", size: "20", tags: "under_30_minutes" },
  headers: {
    "X-RapidAPI-Key": "c5b33aac79msh35ab92ce07cb909p1a9aa0jsn4b3ababecd4d",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

export const fetchFood = async () => {
  const { data } = await axios.request(options);
  return data;
};
