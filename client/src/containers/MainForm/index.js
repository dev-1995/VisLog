import React, { Component } from "react";
import MainFormComp from "../../components/MainForm";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { updateForm, saveFormData } from "../../store/actions/FormActions";
import ToBlob from "../../Utility/CreateBlob";
import nocam from "../../images/nocam.jpg";
class MainForm extends Component {
  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream =>
        this.props.FormState.camera
          ? null
          : this.updateFormData(true, "cameratoggle")
      )
      .catch(e => this.updateFormData(false, "cameratoggle"));
  }
  setRef = webcam => {
    this.camRef = webcam;
  };
  capture = (data, type = "") => {
    if (type !== "capture") {
      return this.updateFormData("", type);
    }
    const imageSrc = this.camRef.getScreenshot();

    return this.updateFormData(imageSrc, type);
  };
  updateFormData = (data, type = "") => {
    switch (type.toLowerCase()) {
      case "gender":
        return this.props.updateForm({ gender: data.target.value });
      case "vehicle":
        return this.props.updateForm({ vehicleType: data.target.value });
      case "capture":
        let blob = ToBlob(data, "image/jpeg");
        return this.props.updateForm({ src: data, image: blob });
      case "recapture":
        return this.props.updateForm({ src: "" });
      case "closesnack":
        return this.props.updateForm({ saved: false });
      case "cameratoggle":
        return this.props.updateForm({ camera: data });
      default:
        return data.target.id.toLowerCase() === "contact" &&
          data.target.value.length > 10
          ? null
          : this.props.updateForm({ [data.target.id]: data.target.value });
    }
  };
  saveData = () => {
    const {
      image,
      contact,
      name,
      vehicleType,
      vehicleNo,
      gender,
      location,
      src
    } = this.props.FormState;
    const data = new FormData();
    data.append("image", image);
    data.append("contact", contact);
    data.append("name", name);
    data.append("vehicleType", vehicleType);
    data.append("vehicleNo", vehicleNo);
    data.append("gender", gender);
    data.append("location", location);

    if (contact.length < 10 || contact.length > 10) {
      return this.props.updateForm({
        error: "Contact Must contain 10 Digits"
      });
    } else {
      this.props.updateForm({
        error: ""
      });
    }
    if (src.length > 0 && this.props.FormState.camera === true) {
      data.append("noimage", false);
      this.props.updateForm({ isSaving: true, saved: false });
      this.props.saveFormData(data);
    } else if (this.props.FormState.camera === false) {
      data.append("noimage", true);
      this.props.updateForm({ isSaving: true, saved: false });
      this.props.saveFormData(data);
    } else {
      this.props.updateForm({
        error: "Please capture image to continue!"
      });
    }
  };

  render() {
    return (
      <MainFormComp
        state={this.props.FormState}
        capture={this.capture.bind(this)}
        updateForm={this.updateFormData.bind(this)}
        saveFormData={this.saveData.bind(this)}
      >
        {this.props.FormState.camera ? (
          <Webcam
            audio={false}
            height={"initial"}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={300}
            style={{
              margin: "20px auto",
              textAlign: "center",
              display: "block"
            }}
          />
        ) : (
          <img src={nocam} height={250} width={300} />
        )}
      </MainFormComp>
    );
  }
}
const MapStateToProps = state => {
  return { FormState: state.Form };
};
export default connect(
  MapStateToProps,
  {
    updateForm,
    saveFormData
  }
)(MainForm);
