import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./router";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
