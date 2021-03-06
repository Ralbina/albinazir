import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";

//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Paper from "@mui/material/Paper";
import "swiper/css";

import SwiperCore, { Thumbs } from "swiper";
import { cartContext } from "../../Context/CartContext";
import { authContext } from "../../Context/AuthContext";

SwiperCore.use([Thumbs]);

//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();

  const { getProductDetails, productDetails } = useContext(productContext);
  const { user } = useContext(authContext);
  const { addProductToCart } = useContext(cartContext);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <section className="product__block-details">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  width={400}
                  src={productDetails.img1}
                  alt={productDetails.title}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={400}
                  src={productDetails.img2}
                  alt={productDetails.title}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={400}
                  src={productDetails.img2}
                  alt={productDetails.title}
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper1"
            >
              <SwiperSlide>
                <Paper elevation={3}>
                  <img
                    width={80}
                    src={productDetails.img1}
                    alt={productDetails.title}
                  />
                </Paper>
              </SwiperSlide>
              <SwiperSlide>
                <Paper elevation={3}>
                  <img
                    width={80}
                    src={productDetails.img2}
                    alt={productDetails.title}
                  />
                </Paper>
              </SwiperSlide>
              <SwiperSlide>
                <Paper elevation={3}>
                  <img
                    width={80}
                    src={productDetails.img3}
                    alt={productDetails.title}
                  />
                </Paper>
              </SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              sx={{ fontWeight: 700, letterSpacing: 2 }}
            >
              {productDetails.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {productDetails.description}
            </Typography>
            <Alert
              icon={<TrendingDownIcon fontSize="inherit" />}
              severity="success"
              sx={{ fontWeight: 700, mt: "20px" }}
            >
              ???????????? : 10 %
            </Alert>
            <Box
              component="div"
              sx={{
                p: 2,
                border: "1px dashed grey",
                display: "flex",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 300,
                  letterSpacing: 2,
                  textDecoration: "line-through",
                  marginRight: "20px",
                }}
              >
                {productDetails.price} ??.
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: 700, letterSpacing: 2 }}
              >
                {productDetails.price} ??.
              </Typography>
            </Box>

            <Button
              onClick={() => addProductToCart(productDetails)}
              variant="contained"
              color="secondary"
              startIcon={<AddShoppingCartIcon />}
              fullWidth={true}
              sx={{ mt: "20px", height: "50px" }}
            >
              Add to Cart
            </Button>
            {user.email === "admin@gmail.com" ? (
              <div>
                <NavLink to={`/edit/${productDetails.id}`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: "20px", height: "50px", width: "410px" }}
                  >
                    Edit
                  </Button>
                </NavLink>
              </div>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetails;
