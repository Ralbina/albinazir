import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import ProductContext from "./Context/ProductContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ProductContext>
        <PrimarySearchAppBar />
        <MainRoutes />

        {/* <Home /> */}
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
