import React, { Component } from "react";
import "./App.css";
import MainForm from "./containers/MainForm";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import vault from "./images/1203.png";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
