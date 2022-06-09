import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import ProductContext from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";
import "./App.css";
import AuthContextProvider from "./Context/AuthContext";
import FavoriteContextProvider from "./Context/FavoriteContext";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <FavoriteContextProvider>
            <ProductContext>
              <PrimarySearchAppBar />
              <MainRoutes />
            </ProductContext>
          </FavoriteContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
