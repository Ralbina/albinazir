import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import ProductContext from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";
import "./App.css";
import AuthContextProvider from "./Context/AuthContext";
import Footer from "./Components/Footer/Footer";
import PaymentCard from "./Components/Payment/Payment";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContext>
            <PrimarySearchAppBar />
            <MainRoutes />
            <Footer />
          </ProductContext>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
