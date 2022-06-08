import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import ProductContext from "./Context/ProductContext";
import "./App.css";
import AuthContextProvider from "./Context/AuthContext";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContext>
          <PrimarySearchAppBar />
          <MainRoutes />
        </ProductContext>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
