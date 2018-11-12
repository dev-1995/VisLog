import React, { Fragment } from "react";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  withStyles
} from "@material-ui/core";
import { ic_close } from "react-icons-kit/md/ic_close";
import green from "@material-ui/core/colors/green";

import { Icon } from "react-icons-kit";
const Snack = props => {
  const { open, className, classes, onClose } = props;
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
      onClose={e => onClose.apply(null, [e, "closesnack"])}
    >
      <SnackbarContent
        className={classes.root}
        message={props.message}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={e => onClose.apply(null, [e, "closesnack"])}
          >
            <Icon icon={ic_close} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};
export default withStyles({ root: { background: green[600] } })(Snack);
