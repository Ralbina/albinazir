import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import ProductContext from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ProductContext>
          <PrimarySearchAppBar />
          <MainRoutes />
        </ProductContext>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
