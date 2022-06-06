import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AddProducts from "./Components/AddProducts/AddProducts";
import Home from "./Components/Home/Home";
import MainRoutes from "./Components/MainRoutes";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import Navbar1 from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
      <MainRoutes />
      {/* <Home /> */}
      {/* <AddProducts /> */}
      {/* <Products /> */}
    </BrowserRouter>
  );
}

export default App;
