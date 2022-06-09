import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";
const INIT_STATE = {
  products: [],
  productDetails: {},
};
const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...prevState, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const addProduct = async (object) => {
    //функция для добавления product в базу данных в db.json
    await axios.post(API, object);
  };

  const getProducts = async () => {
    const { data } = await axios.get(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
    console.log(data);
  };

  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
  };
  return (
    <div>
      <productContext.Provider
        value={{
          addProduct,
          getProducts,
          products: state.products,
          getProductDetails,
          productDetails: state.productDetails,
          deleteProduct,
          editProduct,
        }}
      >
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContext;
