import React, { Component } from "react";
import MainFormComp from "../../components/MainForm";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { updateForm, saveFormData } from "../../store/actions/FormActions";
class MainForm extends Component {
  setRef = webcam => {
    this.camRef = webcam;
  };
  capture = (data, type = "") => {
    console.log(type);
    if (type !== "capture") {
      return this.updateFormData("", type);
    }
    const imageSrc = this.camRef.getScreenshot();
    return this.updateFormData(imageSrc, type);
  };
  updateFormData = (data, type = "") => {
    console.log("type", type);
    switch (type.toLowerCase()) {
      case "gender":
        return this.props.updateForm({ gender: data.target.value });
      case "vehicle":
        return this.props.updateForm({ vehicleType: data.target.value });
      case "capture":
        return this.props.updateForm({ src: data });
      case "recapture":
        return this.props.updateForm({ src: "" });
      default:
        console.log("de", type);
        return this.props.updateForm({ [data.target.id]: data.target.value });
    }
  };
  saveData = () => {};

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
