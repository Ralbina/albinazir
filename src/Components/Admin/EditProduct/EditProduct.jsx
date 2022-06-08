import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../Context/ProductContext";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();

  const { getProductDetails, productDetails, editProduct } =
    useContext(productContext);

  const [editTitle, setEditTitle] = useState(productDetails.title);
  const [editType, setEditType] = useState(productDetails.type);

  const [editDescription, setEditDescription] = useState(
    productDetails.description
  );
  const [editPrice, setEditPrice] = useState(productDetails.price);
  const [editImg1, setEditImg1] = useState(productDetails.img1);

  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  console.log(productDetails);
  const handleChange = () => {
    let editedProduct = {
      title: editTitle,
      type: editType,
      description: editDescription,
      price: editPrice,
      img1: editImg1,
    };
    editProduct(id, editedProduct);
  };
  const handleSave = (e) => {
    e.preventDefault();
    editProduct(id);
    navigate("/list");
  };
  return (
    <div className="fon">
      <div className="add">
        <TextField
          id="outlined-basic"
          label="Название"
          variant="outlined"
          value={editTitle}
          name="title"
          onChange={(e) => setEditTitle(e.target.value)}
          className="inp
          "
        />

        {/* <input
          type="text"
          placeholder="Название"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        /> */}

        <TextField
          id="outlined-basic"
          label="Тип"
          variant="outlined"
          value={editType}
          name="type"
          onChange={(e) => setEditType(e.target.value)}
          className="inp
          "
        />

        {/* <input
          type="text"
          placeholder="Тип"
          value={editType}
          onChange={(e) => setEditType(e.target.value)}
        /> */}

        <TextField
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          value={editDescription}
          name="title"
          onChange={(e) => setEditDescription(e.target.value)}
          className="inp
          "
        />

        {/* <input
          type="text"
          placeholder="Описание"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        /> */}

        <TextField
          id="outlined-basic"
          label="Цена"
          variant="outlined"
          value={editPrice}
          name="price"
          onChange={(e) => setEditPrice(e.target.value)}
          className="inp
          "
        />
        {/* <input
          type="text"
          placeholder="Цена"
          value={editPrice}
          onChange={(e) => setEditPrice(e.target.value)}
        /> */}

        <TextField
          id="outlined-basic"
          label="Фото"
          variant="outlined"
          value={editImg1}
          name="img1"
          onChange={(e) => setEditImg1(e.target.value)}
          className="inp
          "
        />

        {/* <input
          type="text"
          placeholder="Фото"
          value={editImg1}
          onChange={(e) => setEditImg1(e.target.value)}
        /> */}
        <NavLink to="/list">
          <Button className="btn5" variant="contained" onClick={handleChange}>
            Save product
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default EditProduct;
