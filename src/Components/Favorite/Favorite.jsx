import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import React, { useContext, useEffect } from "react";
import Input from "@mui/material/Input";
import { favoriteContext } from "../../Context/FavoriteContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Favorite = () => {
  const { favorite, getFavorite, deleteFavoriteProduct } =
    useContext(favoriteContext);
  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <div className="favorite">
      {favorite.favoriteProducts ? (
        <div>
          {favorite.favoriteProducts.map((elem) => (
            <Card key={elem.item.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={elem.item.img1}
                alt={elem.item.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {elem.item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elem.item.price}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button
                  onClick={() => deleteFavoriteProduct(elem.item.id)}
                  variant="contained"
                >
                  Удалить
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default Favorite;
