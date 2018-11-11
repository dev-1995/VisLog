import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  breakpoints: { values: { xs: 0, sm: 450, md: 600, lg: 900, xl: 1200 } },
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#3B3B98",
      contrastText: "#fff"
    },
    secondary: {
      main: "#25CCF7",
      contrastText: "#fff"
    }
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
