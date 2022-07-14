import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";

const myRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default myRoutes;
