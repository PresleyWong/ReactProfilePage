import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Data from "./data";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter basename={process.env.REACT_APP_ROUTER_BASE || ""}>
    <App data={Data} />
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
