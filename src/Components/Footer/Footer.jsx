import React from "react";

import { Link } from "react-router-dom";
import {
  Container,
  IconButton,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import line from "../../assets/image/logoup.PNG";
import logo1 from "../../assets/image/logoPink.PNG";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="textfooter">
        <h2>More Ways to BR</h2>
        <img id="line" src={line} alt="BG2" />
        <h4>Merchandise </h4>
        <h4>Mobile App </h4>
        <h4>Gift Cards </h4>
      </div>
      <div>
        <h2>Join The Team</h2>
        <img id="line" src={line} alt="BG2" />
        <h4>Careers </h4>
        <h4>Franchising </h4>
        <h4>Contact Us </h4>
      </div>
      <div>
        <h2>Company Info</h2>
        <img id="line" src={line} alt="BG2" />
        <h4>Our Story </h4>
        <h4>FAQs </h4>
        <h4>Pressroom</h4>
        <h4>Sustainability</h4>
        <h4>Pressroom</h4>
      </div>
      <div>
        <img id="logoFooter" src={logo1} />
      </div>
    </div>
  );
};

export default Footer;
