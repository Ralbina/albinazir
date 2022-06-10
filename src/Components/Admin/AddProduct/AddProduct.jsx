import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Toast } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { productContext } from "../../../Context/ProductContext";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const navigate = useNavigate();
  const alertToastify = () => {
    toast.error("Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  const handleClick = () => {
    if (
      title.trim() === "" ||
      type.trim() === "" ||
      description.trim() === "" ||
      price.trim() === "" ||
      img1.trim() === "" ||
      img2.trim() === "" ||
      img3.trim() === ""
    ) {
      alertToastify();
    } else {
      navigate("/list");
    }
    let obj = {
      title: title,
      type: type,
      description: description,
      price: price,
      img1: img1,
      img2: img2,
      img3: img3,
    };
    addProduct(obj);
  };
  return (
    <div className="fon">
      <div className="add add-position">
        <TextField
          id="outlined-basic"
          label="Название"
          variant="outlined"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="inp
          "
        />

        <TextField
          id="outlined-basic"
          label="Тип"
          variant="outlined"
          value={type}
          name="type"
          onChange={(e) => setType(e.target.value)}
          className="inp
          "
        />

        <TextField
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          name="title"
          onChange={(e) => setDescription(e.target.value)}
          className="inp
          "
        />

        <TextField
          id="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          className="inp
          "
        />

        <TextField
          id="outlined-basic"
          label="Фото"
          variant="outlined"
          value={img1}
          name="img1"
          onChange={(e) => setImg1(e.target.value)}
          className="inp
          "
        />
        <TextField
          id="outlined-basic"
          label="Фото"
          variant="outlined"
          value={img2}
          name="img2"
          onChange={(e) => setImg2(e.target.value)}
          className="inp
          "
        />
        <TextField
          id="outlined-basic"
          label="Фото"
          variant="outlined"
          value={img3}
          name="img3"
          onChange={(e) => setImg3(e.target.value)}
          className="inp
          "
        />

        <div>
          <Button
            className="btn5"
            type="submit"
            variant="contained"
            onClick={handleClick}
          >
            Add product
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
