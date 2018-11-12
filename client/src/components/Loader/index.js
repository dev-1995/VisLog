import React from "react";
import { Dialog, DialogContent, Typography } from "@material-ui/core";
import loader from "../../images/loader.gif";
const Loader = props => {
  return (
    <Dialog open={props.open}>
      <DialogContent style={{ padding: 0, textAlign: "center" }}>
        <img src={loader} width="155px" alt="" />

        <Typography
          variant="h4"
          style={{ fontWeight: "bold", padding: "10px 15px" }}
        >
          {props.message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Loader;
