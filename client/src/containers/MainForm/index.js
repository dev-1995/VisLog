import React, { Component } from "react";
import MainFormComp from "../../components/MainForm";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { updateForm, saveFormData } from "../../store/actions/FormActions";
import ToBlob from "../../Utility/CreateBlob";
class MainForm extends Component {
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
      default:
        return this.props.updateForm({ [data.target.id]: data.target.value });
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
    return src.length > 0 ? this.props.saveFormData(data) : null;
  };

  render() {
    return (
      <MainFormComp
        state={this.props.FormState}
        capture={this.capture.bind(this)}
        updateForm={this.updateFormData.bind(this)}
        saveFormData={this.saveData.bind(this)}
      >
        <Webcam
          audio={false}
          height={"initial"}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={300}
          style={{ margin: "20px auto", textAlign: "center", display: "block" }}
        />
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
