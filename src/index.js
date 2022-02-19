import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/store";
import { store } from "./context/store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
