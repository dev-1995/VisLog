import React, { Fragment } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import { ic_close } from "react-icons-kit/md/ic_close";

import { Icon } from "react-icons-kit";
export default props => {
  const { open } = props;
  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      onClose={e => console.log(e)}
      autoHideDuration={3000}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      onDropCapture={e => console.log("Drop")}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={console.log}
        >
          <Icon icon={ic_close} style={{ color: "#fff" }} />
        </IconButton>
      ]}
    >
      <SnackbarContent
        message={<span id="message-id">Data Saved Successfully !</span>}
      />
    </Snackbar>
  );
};
