import React, { PureComponent, Fragment } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormHelperText,
  Button
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
import { mailForward } from "react-icons-kit/fa/mailForward";
import { withStyles } from "@material-ui/core/styles";

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
    const { state, classes, className } = this.props;
    const arr = [
      {
        name: "Devinder Prasad",
        url:
          "http://api.ning.com/files/3xh5OKLELdmunxUkiaqtIRfQ5ExlXCrJ85pKr3jGnbtvlRubARY5VrFNK8TmRXit182qWa1q1WZg-IU*cwBYaFQ-74ff0zW6/Passportsizephoto.JPG",
        vehicleType: "four",
        vehicleNo: "PB 11 AS 3801",
        location: "TIET Audi",
        contact: "7009453824",
        gender: "male",
        time: "12/11/2018 2:00 PM"
      },
      {
        name: "Alisha Setia",
        url: "https://visafoto.com/img/docs/nz_passport_el.jpg",
        vehicleType: "two",
        vehicleNo: "PB 11 AS 3802",
        location: "TIET Audi",
        contact: "7009453824",
        gender: "female",
        time: "12/11/2018 2:00 PM"
      },
      {
        name: "Alisha Setia",
        url: "https://visafoto.com/img/docs/nz_passport_el.jpg",
        vehicleType: "two",
        vehicleNo: "PB 11 AS 3802",
        location: "TIET Audi",
        contact: "7009453824",
        gender: "female",
        time: "12/11/2018 2:00 PM"
      },
      {
        name: "Alisha Setia",
        url: "https://visafoto.com/img/docs/nz_passport_el.jpg",
        vehicleType: "two",
        vehicleNo: "PB 11 AS 3802",
        location: "TIET Audi",
        contact: "7009453824",
        gender: "female",
        time: "12/11/2018 2:00 PM"
      },
      {
        name: "Alisha Setia",
        url: "https://visafoto.com/img/docs/nz_passport_el.jpg",
        vehicleType: "two",
        vehicleNo: "PB 11 AS 3802",
        location: "TIET Audi",
        contact: "7009453824",
        gender: "female",
        time: "12/11/2018 2:00 PM"
      }
    ];
    return (
      <Fragment>
        <Grid container style={{ paddingBottom: "50px" }}>
          {arr.map((i, j) => (
            <Card
              key={j}
              style={{
                boxShadow: "grey 8px 10px 40px",
                margin: "30px 30px 10px 30px"
              }}
              className={classes.root}
            >
              <CardContent
                style={{ margin: "0px 0px", height: 500, overflow: "visible" }}
              >
                <img
                  src={i.url}
                  alt="profile"
                  width="150"
                  height="150"
                  style={{
                    borderRadius: "5px",
                    boxShadow: "10px 10px 40px grey",
                    borderRadius: "100%"
                  }}
                />
                <Typography
                  style={{
                    fontWeight: 900,
                    marginTop: 20,
                    textTransform: "capitalize"
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
                    style={{ margin: "10px 50px" }}
                  />
                  {i.vehicleType === "two" ? "Two Wheeler" : "Four Wheeler"}
                </Typography>
                <Typography variant="body1" align="left">
                  <Icon
                    icon={driversLicenseO}
                    size={25}
                    style={{ margin: "10px 50px" }}
                  />
                  {i.vehicleNo}
                </Typography>

                <Typography variant="body1" align="left">
                  <Icon
                    icon={ic_location_on}
                    size={25}
                    style={{ margin: "10px 50px" }}
                  />
                  {i.location}
                </Typography>
                <Typography variant="body1" align="left">
                  <Icon
                    icon={phone}
                    size={25}
                    style={{ margin: "10px 50px" }}
                  />
                  {i.contact}
                </Typography>
                <Typography variant="body1" align="left">
                  <Icon
                    icon={venus}
                    size={25}
                    style={{ margin: "10px 50px" }}
                  />
                  {i.gender}
                </Typography>
                <Typography variant="body1" align="left">
                  <Icon
                    icon={ic_av_timer}
                    size={25}
                    style={{ margin: "10px 50px" }}
                  />
                  {i.time}
                </Typography>
                <Button
                  variant="fab"
                  style={{ background: "#FE7C8D", right: "-150px", top: -10 }}
                >
                  <Icon icon={mailForward} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Fragment>
    );
  }
}
export default withStyles(styles)(OutList);
