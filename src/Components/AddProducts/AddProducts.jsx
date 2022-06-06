import { Button, TextField } from "@mui/material";
import React from "react";
import "./AddProducts.css";
const AddProducts = () => {
  return (
    <form>
      <div className="add">
        <TextField
          id="outlined-basic"
          label="Название"
          variant="outlined"
          //   value={inpValues.title}
          name="title"
          // onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Тип"
          variant="outlined"
          //   value={inpValues.type}
          name="type"
          // onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          //   value={inpValues.description}
          name="description"
          // onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Цена"
          variant="outlined"
          //   value={inpValues.price}
          name="price"
          // onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Изображение1"
          variant="outlined"
          //   value={inpValues.img1}
          name="img1"
          // onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Изображение2"
          variant="outlined"
          //   value={inpValues.img2}
          name="img2"
          // onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Изображение3"
          variant="outlined"
          //   value={inpValues.img3}
          name="img3"
          // onChange={(e) => handleChange(e)}
        />
        <Button className="btn-1" type="submit" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddProducts;
