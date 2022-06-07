import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProducts from "./AddProducts/AddProducts";
import Home from "./Home/Home";
import Products from "./Products/Products";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProducts />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default MainRoutes;
