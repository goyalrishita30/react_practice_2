import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // menu drawer

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "300px" }}
    >
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastfoodIcon /> My restaurant
      </Typography>
      <ul className="mobile-navigation-menu">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  // parenthesis () means can be directly returned

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon /> My restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName='active' to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <SwipeableDrawer
            anchor="left"
            // variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" }, width: "200px" }}
          >
            {drawer}
          </SwipeableDrawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
