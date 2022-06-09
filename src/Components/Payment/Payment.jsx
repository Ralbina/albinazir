import { TextField } from "@mui/material";
import React from "react";
import card from "../../assets/image/rccs.gif";
import "./Payment.css";

const PaymentCard = () => {
  return (
    <div id="container">
      <div>
        <img className="img" src={card} />
      </div>
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
    </div>
  );
};

export default PaymentCard;
