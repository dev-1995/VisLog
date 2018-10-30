import React, { Component, Fragment } from "react";
import "./App.css";
import MainForm from "./containers/MainForm";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import vault from "./images/1203.png";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Grid
            container
            style={{
              background: `url(${vault})`,
              backgroundPosition: "attachment",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%"
            }}
          >
            <Navbar />
            <MainForm />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
