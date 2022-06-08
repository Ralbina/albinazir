import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductsList from "./Components/ProductsList/ProductsList";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Auth/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
