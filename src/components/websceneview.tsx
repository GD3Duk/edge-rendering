import SceneView = require("esri/views/SceneView");
import SpatialReference = require("esri/geometry/SpatialReference");
import Camera = require("esri/Camera");
import watchUtils = require("esri/core/watchUtils");

import urbanScene from "./scenes/urban";
import touristicScene from "./scenes/touristic";


import * as React from "react";

interface WebsceneProps {
  webscene: string | null
}

export default class WebSceneView extends React.Component<WebsceneProps> {

  view: SceneView;
  constructor(props: WebsceneProps) {
    super(props);
  }

  componentDidMount() {
    this.view = new SceneView({
      container: "view",
      qualityProfile: "high",
      environment: {
        lighting: {
          directShadowsEnabled: true,
          ambientOcclusionEnabled: false,
        }
      }
    });


  }

  setWebscene() {
    switch (this.props.webscene) {
      case "urban":
        this.view.map = urbanScene;
        watchUtils.whenTrueOnce(this.view, 'ready', () => {
          this.view.camera = new Camera({
            tilt: 60.55,
            heading: 325.414,
            position: {
              x: 2779013.3296484053,
              y: 8435936.990969075,
              z: 562.1344378096983,
              spatialReference: SpatialReference.WebMercator
            },
            fov: 20
          });
        });
      break;
      case "touristic":
        this.view.map = touristicScene;
        watchUtils.whenTrueOnce(this.view, 'ready', () => {
          this.view.camera = new Camera({
            tilt: 71.56,
            heading: 102.02,
            position: {
              spatialReference: SpatialReference.WebMercator,
              x: 254448.1467861235,
              y: 6250903.845052144,
              z: 336.41605402249843
            }
          });
        });

      break;
    }
  }

  render() {
    this.setWebscene();
    return (
      <div id="view"></div>
    );
  }
}