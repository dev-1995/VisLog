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
import { ic_face } from "react-icons-kit/md/ic_face";
import { ic_details } from "react-icons-kit/md/ic_details";
import { ic_camera_enhance } from "react-icons-kit/md/ic_camera_enhance";
import Loader from "../Loader";
import Snack from "../Snackbar";
export default class extends PureComponent {
  videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  render() {
    const { updateForm, saveFormData, state } = this.props;
    const srcLength = state.src.length;
    return (
      <Grid container>
        <Grid item md={1} />
        <Grid item xs={12} md={10}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "5px 5px 50px 4px grey ",
              marginBottom: 20
            }}
          >
            <CardContent style={{ padding: 0 }}>
              <Grid container style={{ textAlign: "left" }}>
                <Grid
                  xs={12}
                  md={8}
                  item
                  style={{
                    background: "#F9F9FB",
                    paddingTop: "20px",
                    paddingLeft: "30px",
                    paddingBottom: "20px"
                  }}
                >
                  <Typography
                    style={{ textAlign: "center", color: "#000" }}
                    variant="h5"
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
                    id="name"
                    value={state.name}
                    onChange={updateForm}
                  />
                  <TextField
                    label="Contact"
                    margin="normal"
                    style={{ width: "90%" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    type="number"
                    value={state.contact}
                    id="contact"
                    onChange={updateForm}
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
                      id="gender"
                      style={{ flexDirection: "row" }}
                      value={state.gender}
                      onChange={e => updateForm.apply(null, [e, "gender"])}
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
                      Vehicle Type
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender2"
                      style={{ flexDirection: "row" }}
                      onChange={e => updateForm.apply(null, [e, "vehicle"])}
                      id="vehicleType"
                      value={state.vehicleType}
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
                    id="vehicleNo"
                    onChange={updateForm}
                    margin="normal"
                    value={state.vehicleNo}
                  />
                  <TextField
                    label="Location to visit"
                    style={{ width: "90%" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    value={state.location}
                    id="location"
                    onChange={updateForm}
                    margin="normal"
                  />
                </Grid>
                <Grid
                  md={4}
                  item
                  style={{
                    marginLeft: "0px",
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

                  {srcLength > 0 ? (
                    <img
                      alt="visitor"
                      src={state.src}
                      height={280}
                      width={320}
                      style={{
                        display: "block",
                        paddingLeft: "10%",
                        marginBottom: 30
                      }}
                    />
                  ) : (
                    this.props.children
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={e => {
                      return srcLength < 1
                        ? this.props.capture.apply(null, [e, "capture"])
                        : this.props.capture.apply(null, [e, "recapture"]);
                    }}
                  >
                    {srcLength > 0 ? "Re-Capture" : "Capture"}
                  </Button>
                  <Typography
                    variant="caption"
                    style={{
                      color: "darkgreen",
                      margin: "20px 0px",
                      textAlign: "center"
                    }}
                  >
                    {srcLength > 0
                      ? null
                      : "* Please adjust camera to get clear image"}
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
                    onClick={saveFormData}
                  >
                    Save
                  </Button>

                  {state.error.length > 0 ? (
                    <FormHelperText style={{ textAlign: "center" }} error>
                      *{" "}
                      {state.error.indexOf("contact")
                        ? "Contact must be contain 10 digits"
                        : state.error}
                    </FormHelperText>
                  ) : null}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={1} />
        <Loader open={state.isSaving} message={"Saving Details..."} />
        <Snack
          open={state.saved}
          message={" Details Saved Successfully !"}
          onClose={updateForm}
        />
      </Grid>
    );
  }
}
