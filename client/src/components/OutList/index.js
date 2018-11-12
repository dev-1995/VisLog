import React, { PureComponent } from "react";
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
export default class extends PureComponent {
  videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  render() {
    const { state } = this.props;
    console.log(state);
    return (
      <Grid container style={{ height: "100vh" }}>
        <Grid xs={2} item />
        <Grid item xs={3}>
          <Card>
            <CardContent style={{ margin: "0px 0px", height: 450 }}>
              <img
                src="data:image/jpeg;base64,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  "
                alt="profile"
                width="150"
                height="150"
                style={{
                  borderRadius: "5px",
                  boxShadow: "10px 10px 40px grey",
                  borderRadius: "100%",
                  marginBottom: 20
                }}
              />
              <Typography style={{ fontWeight: 900 }} variant="h6">
                Devinder Prasad
              </Typography>
              <Typography
                style={{ marginTop: 50 }}
                variant="body1"
                align="left"
              >
                <Icon
                  icon={automobile}
                  size={25}
                  style={{ margin: "10px 50px" }}
                />
                {"Four Wheeler"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={1} item />

        {/* sec */}
        <Grid xs={1} item style={{ zIndex: -1 }} />
        <Grid item xs={3}>
          <Card style={{ boxShadow: "10px 10px 12px grey" }}>
            <CardContent style={{ margin: "0px 0px", height: 500 }}>
              <img
                src="data:image/jpeg;base64,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  "
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
                style={{ fontWeight: 900, marginTop: 20 }}
                variant="h6"
              >
                Devinder Prasad
              </Typography>
              <Typography
                style={{ marginTop: 20 }}
                variant="body1"
                align="left"
              >
                <Icon
                  icon={motorcycle}
                  size={25}
                  style={{ margin: "10px 50px" }}
                />
                {"Two Wheeler"}
              </Typography>
              <Typography variant="body1" align="left">
                <Icon
                  icon={driversLicenseO}
                  size={25}
                  style={{ margin: "10px 50px" }}
                />
                {"PB 11 AS 3801"}
              </Typography>

              <Typography variant="body1" align="left">
                <Icon
                  icon={ic_location_on}
                  size={25}
                  style={{ margin: "10px 50px" }}
                />
                {"TIET Audi"}
              </Typography>
              <Typography variant="body1" align="left">
                <Icon icon={phone} size={25} style={{ margin: "10px 50px" }} />
                {"7009453824"}
              </Typography>
              <Typography variant="body1" align="left">
                <Icon icon={venus} size={25} style={{ margin: "10px 50px" }} />
                {"Male"}
              </Typography>
              <Typography variant="body1" align="left">
                <Icon
                  icon={ic_av_timer}
                  size={25}
                  style={{ margin: "10px 50px" }}
                />
                {"12/11/2018 2:00 PM"}
              </Typography>
              <Button variant="fab">
                <Icon icon={mailForward} />
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={2} item />
      </Grid>
    );
  }
}
