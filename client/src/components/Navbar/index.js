import React from "react";
import logo from "../../images/logo-sm.png";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
export default () => {
  return (
    <AppBar
      position="relative"
      style={{ background: "transparent", marginBottom: 20, boxShadow: "none" }}
    >
      <Toolbar>
        <span style={{ flexGrow: 1, textAlign: "left" }}>
          <img src={logo} />
        </span>

        <Button component={Link} to="/home" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/out" color="inherit">
          Out List
        </Button>
        <Button component={Link} to="/bG9ncw==" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
