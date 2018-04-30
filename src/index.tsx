import "./config";
import "./css/main.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import WebSceneView from "./components/websceneview";


ReactDOM.render(
  <div id="container">
    <WebSceneView/>
  </div>,
  document.getElementById("app")
);