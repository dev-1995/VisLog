import React, { Fragment } from "react";
import logo from "../../images/logo-sm.png";
import { Grid, Button, AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
export default () => {
  return (
    <AppBar
      position="relative"
      style={{ background: "transparent", marginBottom: 20 }}
    >
      <Toolbar>
        <span style={{ flexGrow: 1, textAlign: "left" }}>
          <img src={logo} />
        </span>

        <Button color="inherit">Home</Button>
        <Button color="inherit">Out List</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
