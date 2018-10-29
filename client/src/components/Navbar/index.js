import React, { Fragment } from "react";
import logo from "../../images/logo-sm.png";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default () => {
  return (
    <Fragment>
      <Grid
        xs={3}
        item
        style={{ height: "50px", padding: "0px 0px", textAlign: "left" }}
      >
        <img
          src={logo}
          style={{
            background: "transparent",
            paddingTop: "10px",
            paddingLeft: "50px"
          }}
        />
      </Grid>
      <Grid xs={9} style={{ padding: "0px", textAlign: "right" }}>
        <Button
          component={Link}
          to="/form"
          style={{ marginTop: 20, color: "#fff" }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/outlist"
          style={{
            marginTop: 20,
            paddingLeft: "20px",
            marginRight: 50,
            color: "#fff"
          }}
        >
          Out List
        </Button>
      </Grid>
    </Fragment>
  );
};
