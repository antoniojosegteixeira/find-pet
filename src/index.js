import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

import "./Styles/Global/index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/Theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
