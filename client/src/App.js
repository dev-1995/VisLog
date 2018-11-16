import React, { Component } from "react";
import "./App.css";
import MainForm from "./containers/MainForm";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import vault from "./images/1203.png";
import { Provider } from "react-redux";
import OutList from "./containers/OutList";
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
              <Switch>
                <Route path="/home" exact component={MainForm} />
                <Route path="/" exact component={MainForm} />
                <Route path="/out" exact component={OutList} />
              </Switch>
            </Grid>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
