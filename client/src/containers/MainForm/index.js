import React, { Component } from "react";
import MainFormComp from "../../components/MainForm";

import Webcam from "react-webcam";
export default class MainForm extends Component {
  setRef = webcam => {
    this.camRef = webcam;
  };
  capture = () => {
    const imageSrc = this.camRef.getScreenshot();
    console.log(imageSrc);
  };
  render() {
    return (
      <MainFormComp capture={this.capture.bind(this)}>
        <Webcam
          audio={false}
          height={"initial"}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={300}
          style={{ margin: "20px auto", textAlign: "center" }}
        />
      </MainFormComp>
    );
  }
}
