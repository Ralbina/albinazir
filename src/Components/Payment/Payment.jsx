import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import newCredit from "../../assets/image/newCredit.png";
import card from "../../assets/image/rccs.gif";
import "./Payment.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";

const PaymentCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="AlBinazir"
          subheader="June 10, 2022"
        />
        <CardMedia
          component="img"
          height="194"
          image={newCredit}
          alt="newCredit-card"
        />
        <CardContent>
          <div>
            <TextField
              className="cardInp"
              label="Card's number"
              color="secondary"
              focused
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
            <TextField
              className="cardInp"
              label="
Сard expiry date"
              color="secondary"
              focused
              placeholder="mm/YY"
            />
            <TextField
              className="cardInp"
              label="Cod"
              color="secondary"
              focused
              placeholder="CVV/CVV2"
            />
            <TextField
              className="cardInp"
              label="Сardowner"
              color="secondary"
              focused
              placeholder="Lastname, Name"
            />
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <NavLink to="/confirmPay">
            <Button variant="contained">Подтвердить</Button>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
};

export default PaymentCard;
