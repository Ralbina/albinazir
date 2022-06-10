import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import ProductContext from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./Context/AuthContext";
import FavoriteContextProvider from "./Context/FavoriteContext";
import Footer from "./Components/Footer/Footer";
import PaymentCard from "./Components/Payment/Payment";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <FavoriteContextProvider>
            <ProductContext>
              <PrimarySearchAppBar />
              <MainRoutes />
              <Footer />
            </ProductContext>
          </FavoriteContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
