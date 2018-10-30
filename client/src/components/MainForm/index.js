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
  InputAdornment,
  FormHelperText,
  Button,
  IconButton
} from "@material-ui/core";
import { Icon } from "react-icons-kit";
import { ic_face } from "react-icons-kit/md/ic_face";
import { ic_details } from "react-icons-kit/md/ic_details";
import { ic_camera_enhance } from "react-icons-kit/md/ic_camera_enhance";
import { ic_access_time } from "react-icons-kit/md/ic_access_time";
import format from "date-fns/format";
export default class extends PureComponent {
  videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  render() {
    return (
      <Grid container>
        <Grid item md={1} item />
        <Grid item xs={12} item md={10}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "5px 15px 25px 5px grey ",
              marginBottom: 20
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
                    style={{ textAlign: "center", color: "#000" }}
                    variant="display1"
                  >
                    Visitor Details
                  </Typography>
                  <Typography
                    variant="title"
                    style={{
                      textAlign: "left",

                      paddingTop: 20,
                      paddingBottom: 10,
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
                  <TextField
                    label="Contact"
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
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio color="primary" />}
                        label="Other"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography
                    variant="title"
                    style={{
                      textAlign: "left",
                      paddingTop: 25,
                      paddingBottom: 10,
                      color: "#2A73A5"
                    }}
                  >
                    <Icon
                      icon={ic_details}
                      style={{ verticalAlign: "bottom" }}
                      size={25}
                    />
                    Other Details
                  </Typography>
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
                      value={"two"}
                    >
                      <FormControlLabel
                        value="two"
                        style={{ marginLeft: 0 }}
                        control={<Radio color="primary" />}
                        label="Two Wheeler"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="four"
                        control={<Radio color="primary" />}
                        label="Four Wheeler"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>
                  <TextField
                    label="Vehicle Number"
                    style={{ width: "90%" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                  />
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
                  item
                  style={{
                    marginLeft: "-30px",
                    boxShadow: "-13px 10px 28px 0px grey",
                    background: "#fff",
                    textAlign: "center"
                  }}
                >
                  <Typography
                    variant="title"
                    style={{
                      textAlign: "center",
                      paddingTop: 25,
                      paddingBottom: 10,
                      color: "#2A73A5"
                    }}
                  >
                    <Icon
                      icon={ic_camera_enhance}
                      style={{ verticalAlign: "bottom" }}
                      size={25}
                    />{" "}
                    Visitor's Photograp
                  </Typography>
                  {this.props.children}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.capture}
                  >
                    Capture
                  </Button>
                  <Typography
                    variant="caption"
                    style={{
                      color: "darkgreen",
                      margin: "20px 0px",
                      textAlign: "center"
                    }}
                  >
                    * Please adjust camera to get clear image
                  </Typography>
                  <Button
                    color="primary"
                    style={{
                      display: "block",
                      width: "50%",
                      marginLeft: 95,
                      marginTop: 80
                    }}
                    variant="contained"
                  >
                    Save
                  </Button>
                  <FormHelperText style={{ textAlign: "center" }} error>
                    * Some error to be reported
                  </FormHelperText>
                  <FormHelperText style={{ textAlign: "center" }} error>
                    * Some error to be reported
                  </FormHelperText>
                  <FormHelperText style={{ textAlign: "center" }} error>
                    * Some error to be reported
                  </FormHelperText>
                  <FormHelperText style={{ textAlign: "center" }} error>
                    * Some error to be reported
                  </FormHelperText>
                  <FormHelperText style={{ textAlign: "center" }} error>
                    * Some error to be reported
                  </FormHelperText>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={1} />
      </Grid>
    );
  }
}
