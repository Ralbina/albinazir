import React, { useContext, useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../Context/CartContext";

import ReactPaginate from "react-paginate";
import "./ProductList.css";
import Filter from "../Filter/Filter";
import { favoriteContext } from "../../Context/FavoriteContext";
import AuthContextProvider, { authContext } from "../../Context/AuthContext";
// const ProductsList = () => {
//   const { getProducts, products, deleteProduct } = useContext(productContext);
//   const { addProductToCart } = useContext(cartContext);
// useEffect(() => {
//   getProducts();
// }, []);
// let page = 1;
const ProductsList = () => {
  const { getProducts, products, deleteProduct, productDetails } =
    useContext(productContext);

  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavorite } = useContext(favoriteContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useContext(authContext);

  const [type, setType] = useState(searchParams.get("type") || "all");
  const paramsWithType = () => {
    // console.log("params With Type");
    return {
      type: type,
      q: searchParams.get("q"),
    };
  };

  const paramsNoType = () => {
    // console.log("params No Type");
    return {
      q: searchParams.get("q") || "",
    };
  };
  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);
  useEffect(() => {
    getProducts();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  // ! Paginate
  const [pageNumber, setPageNumber] = useState(0);
  const productsLimit = 6;
  const productVisited = pageNumber * productsLimit;

  const pageCount = Math.ceil(products.length / productsLimit);

  let sliceTwoIndex = productVisited + productsLimit;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div id="filter1">
      <div className="filter">
        <Filter type={type} setType={setType} />
      </div>
      <div className="container">
        {products
          ? products.slice(productVisited, sliceTwoIndex).map((item) => (
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
                  {user.email === "admin@gmail.com" ? (
                    <div>
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
                    </div>
                  ) : null}

                  <NavLink to={`/details/${item.id}`}>
                    <Button className="btn" size="small" variant="outlined">
                      Preview
                    </Button>
                  </NavLink>

                  <Button onClick={() => addProductToCart(item)}>
                    <AddShoppingCartIcon />
                  </Button>
                </CardActions>
                <Button
                  onClick={() => addProductToFavorite(item)}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </Button>
              </Card>
            ))
          : null}
        <ReactPaginate
          previousLabel={"??????????"}
          nextLabel={"????????????"}
          pageCount={pageCount}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};

export default ProductsList;
