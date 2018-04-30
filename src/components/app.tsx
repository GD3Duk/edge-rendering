import * as React from "react";

import WebSceneView from "./websceneview";
import Menu from "./menu";

export default class App extends React.Component {

  render() {
    return (
      <div id="container">
        <WebSceneView/>
        <Menu/>
      </div>
    );
  }
}
