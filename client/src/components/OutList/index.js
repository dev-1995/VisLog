import React, { PureComponent, Fragment } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  IconButton
} from "@material-ui/core";
import { Icon } from "react-icons-kit";
import { automobile } from "react-icons-kit/fa/automobile";
import { motorcycle } from "react-icons-kit/fa/motorcycle";
import { driversLicenseO } from "react-icons-kit/fa/driversLicenseO";
import { venus } from "react-icons-kit/fa/venus";
import { phone } from "react-icons-kit/fa/phone";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import Snack from "../Snackbar";
import { ic_av_timer } from "react-icons-kit/md/ic_av_timer";
import { withStyles } from "@material-ui/core/styles";
import { signOut } from "react-icons-kit/fa/signOut";
import Loader from "../Loader";
import moment from "moment-timezone";
import nocam from "../../images/nocam.jpg";
const styles = theme => ({
  root: {
    overflow: "visible"
  }
});
class OutList extends PureComponent {
  videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  render() {
    const { state, classes, className, markOut, setInfo } = this.props;

    return (
      <Fragment>
        <Grid container style={{ paddingBottom: "50px" }}>
          {state.list.map((i, j) => (
            <Fragment>
              <Grid xs={3} key={j} item>
                <Card
                  style={{
                    boxShadow: "grey 8px 10px 40px",
                    margin: "30px 30px 10px 30px"
                  }}
                  className={classes.root}
                >
                  <CardContent
                    style={{
                      margin: "0px 0px",
                      height: 500,
                      overflow: "visible",
                      textTransform: "capitalize"
                    }}
                  >
                    <img
                      src={i.image === "" ? nocam : `/uploads/${i.image}`}
                      alt="profile"
                      width="150"
                      height="150"
                      style={{
                        boxShadow: "10px 10px 40px grey",
                        borderRadius: "100%"
                      }}
                    />
                    <Typography
                      style={{
                        fontWeight: 900,
                        marginTop: 20
                      }}
                      variant="h6"
                    >
                      {i.name}
                    </Typography>
                    <Typography
                      style={{ marginTop: 20 }}
                      variant="body1"
                      align="left"
                    >
                      <Icon
                        icon={i.vehicleType === "two" ? motorcycle : automobile}
                        size={25}
                        style={{ margin: "10px 20px" }}
                      />
                      {i.vehicleType === "two" ? "Two Wheeler" : "Four Wheeler"}
                    </Typography>
                    <Typography variant="body1" align="left">
                      <Icon
                        icon={driversLicenseO}
                        size={25}
                        style={{ margin: "10px 20px" }}
                      />
                      {i.vehicleNo}
                    </Typography>

                    <Typography variant="body1" align="left">
                      <Icon
                        icon={ic_location_on}
                        size={25}
                        style={{ margin: "10px 20px" }}
                      />
                      {i.siteInfo}
                    </Typography>
                    <Typography variant="body1" align="left">
                      <Icon
                        icon={phone}
                        size={25}
                        style={{ margin: "10px 20px" }}
                      />
                      {i.mobile}
                    </Typography>
                    <Typography variant="body1" align="left">
                      <Icon
                        icon={venus}
                        size={25}
                        style={{ margin: "10px 20px" }}
                      />
                      {i.gender}
                    </Typography>
                    <Typography variant="body1" align="left">
                      <Icon
                        icon={ic_av_timer}
                        size={25}
                        style={{ margin: "10px 20px 0px" }}
                      />
                      {moment(i.startDate)
                        .tz("Asia/Kolkata")
                        .format("D-MM-YYYY hh:mm A")
                        .toString()}
                    </Typography>
                    <IconButton
                      variant="fab"
                      style={{
                        background: "#FE7C8D",
                        right: "-58%",
                        top: -10,
                        width: "60px",
                        height: "60px",
                        boxShadow: " 4px -1px 10px grey"
                      }}
                      id={i._id}
                      onClick={markOut}
                    >
                      <Icon icon={signOut} size={25} />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            </Fragment>
          ))}
        </Grid>
        <Loader open={state.isLoading} message={"Updating List..."} />
        <Snack
          open={state.markedOut}
          message={"Record Updated!"}
          onClose={setInfo}
        />
      </Fragment>
    );
  }
}
export default withStyles(styles)(OutList);
