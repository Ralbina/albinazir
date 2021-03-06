import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Navbar from "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import logoup from "../../assets/image/logoup.PNG";
import logoWhite from "../../assets/image/logoWhite.PNG";
import logo12 from "../../assets/image/logo1-2.PNG";
import logopink from "../../assets/image/logoPink.PNG";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LiveSearch from "../Livesearch/Livesearch";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { cartContext } from "../../Context/CartContext";
import { favoriteContext } from "../../Context/FavoriteContext";
import { authContext } from "../../Context/AuthContext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CottageIcon from "@mui/icons-material/Cottage";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function PrimarySearchAppBar() {
  const { favoriteLenght } = React.useContext(favoriteContext);
  const { cartLenght } = React.useContext(cartContext);
  const { user, handleLogOut } = React.useContext(authContext);

  // const { user } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const logout = () => {
    handleLogOut();
    handleMenuClose();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{user.email}</MenuItem>
      {user.email === undefined ? null : (
        <MenuItem onClick={logout}>Log out</MenuItem>
      )}

      <NavLink to="/Login">
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </NavLink>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/favorite">
          <IconButton
            size="large"
            color="inherit" // ?????????? ???????? ?? ???????????? ??????????
            aria-label="add to favorites"
          >
            <Badge badgeContent={favoriteLenght} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </NavLink>
        <p>Favorite</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NavLink to="/cart">
            <Badge badgeContent={cartLenght} color="error">
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
        </IconButton>
        <p>Cart</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="inherit" aria-label="add to favorites">
          <NavLink to="/list">
            <ShoppingCartCheckoutIcon />
            <Badge color="secondary"></Badge>
          </NavLink>
        </IconButton>
        <p>Shop</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="inherit" aria-label="add to favorites">
          <NavLink to="/">
            <CottageIcon />
            <Badge color="secondary"></Badge>
          </NavLink>
        </IconButton>
        <p>Home</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <img
            id="iceWhite"
            alt=""
            src={logopink}
            width="8%"
            height="10%"
            className="logo"
          />
          <LiveSearch />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink className="nav-link" to="/">
              <p variant="contained">Home</p>
            </NavLink>
            <NavLink className="nav-link" to="/list">
              <p variant="contained">Products</p>
            </NavLink>
            {user.email === "admin@gmail.com" ? (
              <NavLink className="nav-link" to="/add">
                <p variant="contained">Add Produts</p>
              </NavLink>
            ) : null}
            <IconButton
              size="large"
              color="inherit" // ?????????? ???????? ?? ???????????? ??????????
              aria-label="add to favorites"
            >
              <NavLink to="/favorite">
                <Badge badgeContent={favoriteLenght} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </NavLink>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NavLink to="/cart">
                <Badge badgeContent={cartLenght} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </NavLink>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
