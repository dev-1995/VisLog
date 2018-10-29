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
  InputAdornment,
  FormHelperText
} from "@material-ui/core";
import { Icon } from "react-icons-kit";
import { ic_face } from "react-icons-kit/md/ic_face";

export default class extends PureComponent {
  render() {
    return (
      <Grid container>
        <Grid item md={1} item />
        <Grid item xs={12} item md={10}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "5px 15px 25px 5px grey "
            }}
          >
            <CardContent style={{ padding: 0 }}>
              <Grid container style={{ textAlign: "left" }}>
                <Grid
                  xs={12}
                  md={8}
                  style={{
                    background: "#F9F9FB",
                    paddingTop: "20px",
                    paddingLeft: "30px",
                    paddingBottom: "20px"
                  }}
                >
                  <Typography
                    style={{ textAlign: "center" }}
                    variant="display1"
                  >
                    Visitor Details
                  </Typography>
                  <Typography
                    variant="title"
                    style={{
                      textAlign: "left",

                      paddingTop: 20,
                      paddingBottom: 20,
                      color: "#2A73A5"
                    }}
                  >
                    <Icon
                      icon={ic_face}
                      style={{ verticalAlign: "bottom" }}
                      size={25}
                    />
                    Personal Details
                  </Typography>
                  <TextField
                    label="Full Name"
                    margin="normal"
                    style={{ width: "90%" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />

                  <FormControl
                    component="fieldset"
                    // className={classes.formControl}
                    style={{
                      width: "60%",
                      clear: "both"
                    }}
                  >
                    <FormLabel
                      style={{
                        fontSize: "0.8em",
                        paddingTop: "20px"
                      }}
                      component="legend"
                    >
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender2"
                      style={{ flexDirection: "row" }}
                      // className={classes.group}
                      // value={this.state.value}
                      // onChange={this.handleChange}
                      value={"female"}
                    >
                      <FormControlLabel
                        value="female"
                        style={{ marginLeft: 0 }}
                        control={<Radio color="primary" />}
                        label="Female"
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio color="primary" />}
                        label="Other"
                        labelPlacement="start"
                      />
                    </RadioGroup>
                  </FormControl>
                  <TextField
                    label="Location to visit"
                    style={{ width: "90%" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                  />
                </Grid>
                <Grid
                  md={4}
                  style={{
                    marginLeft: "-30px",
                    boxShadow: "-13px 10px 28px 0px grey",
                    background: "#fff"
                  }}
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={1} />
      </Grid>
    );
  }
}
