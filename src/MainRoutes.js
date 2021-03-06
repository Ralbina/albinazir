import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Home from "./Components/Home/Home";
import ProductsList from "./Components/ProductsList/ProductsList";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Auth/Login";
import Favorite from "./Components/Favorite/Favorite";
import PaymentCard from "./Components/Payment/Payment";
import ConfirmPay from "./Components/ConfirmPay/ConfirmPay";

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
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/payment" element={<PaymentCard />} />
      <Route path="/confirmPay" element={<ConfirmPay />} />
    </Routes>
  );
};

export default MainRoutes;
