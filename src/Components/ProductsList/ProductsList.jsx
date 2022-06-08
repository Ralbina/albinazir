import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../Context/CartContext";

const ProductsList = () => {
  const { getProducts, products, deleteProduct } = useContext(productContext);
  const { addProductToCart } = useContext(cartContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products ? (
        products.map((item) => (
          <Card
            key={item.id}
            className="card"
            sx={{
              borderRadius: "20px",
              width: "300px",
              height: "430px ",
              marginBottom: "50px",
            }}
          >
            <CardMedia
              sx={{
                width: "200px",
                height: "220px",
                alignItems: "center",
                margin: "auto",
              }}
              component="img"
              alt={item.title}
              height="100"
              image={item.img1}
            />
            <CardContent sx={{ marginLeft: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>

              {/* <Typography variant="body2" color="text.secondary" height="25px">
                {item.description}
              </Typography> */}

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
                variant="body2"
                color="text.secondary"
              >
                {item.price}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              {/* <Button className="btn1" size="small" variant="outlined">
              Edit
            </Button> */}
              <Button
                onClick={() => deleteProduct(item.id)}
                sx={{
                  marginRight: "20px",
                }}
                className="btn"
                size="small"
                variant="outlined"
              >
                delete
                <RestoreFromTrashIcon />
              </Button>
              <NavLink to={`/details/${item.id}`}>
                <Button className="btn" size="small" variant="outlined">
                  Preview
                </Button>
              </NavLink>

              <Button onClick={(e) => addProductToCart(item)}>
                <AddShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>

          // <div key={item.id}>
          //   <img src={item.img1} alt={item.title} width={100} />
          //   <h2>{item.title}</h2>
          //   <NavLink to={`/details/${item.id}`}>
          //     <button>Просмотреть</button>
          //   </NavLink>
          // </div>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default ProductsList;
