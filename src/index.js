import React from "react";
import ReactDOM from "react-dom/client";
import FontStyles from "./assets/fonts/fonts";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
