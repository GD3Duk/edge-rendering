import SceneView = require("esri/views/SceneView");
import SpatialReference = require("esri/geometry/SpatialReference");
import Camera = require("esri/Camera");
import watchUtils = require("esri/core/watchUtils");

import urbanScene from "./scenes/urban";
import touristicScene from "./scenes/touristic";
import nightScene from "./scenes/night";
import oldScene from "./scenes/old";


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
          ambientOcclusionEnabled: true,
        }
      }
    });

    (window as any).view = this.view;

    if (this.props.webscene) {
      this.setWebscene();
    }
  }

  setWebscene() {
    switch (this.props.webscene) {
      case "urban":
        this.view.map = urbanScene;
        watchUtils.whenTrueOnce(this.view, 'ready', () => {
          this.view.camera = new Camera({
            tilt: 45,
            heading: 319,
            position: {
              x: 2779948.050535852,
              y: 8435152.254964657,
              z: 1537.7454999526963,
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
      case "night":
        this.view.map = nightScene;
        watchUtils.whenTrueOnce(this.view, 'ready', () => {
          this.view.camera = new Camera({
            position: {
              spatialReference: SpatialReference.WebMercator,
              x: -8235954.5169841675,
              y: 4972365.210819486,
              z: 2567.442529133521
            },
            tilt: 42,
            heading: 357.74,
            fov: 20
          });
        });
      break;
      case "old":
        this.view.map = oldScene;
      break;
    }
  }

  render() {
    if (this.view) {
      this.setWebscene();
    }
    return (
      <div id="view"/>
    );
  }
}