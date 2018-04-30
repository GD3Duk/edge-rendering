import SceneView = require("esri/views/SceneView");
import SpatialReference = require("esri/geometry/SpatialReference");
import urbanPlanningScene from "./urbanPlanning";
import touristicScene from "./touristic";
import * as React from "react";

export default class WebSceneView extends React.Component {

  componentDidMount() {
    const view = new SceneView({
      container: "view",
      map: touristicScene,
      qualityProfile: "high",
      environment: {
        lighting: {
          directShadowsEnabled: true,
          ambientOcclusionEnabled: false,
        }
      },
      camera: {
        tilt: 71.56,
        heading: 102.02,
        position: {
          spatialReference: SpatialReference.WebMercator,
          x: 254448.1467861235,
          y: 6250903.845052144,
          z: 336.41605402249843
        }
      }
      /* camera: {
        tilt: 60.55,
        heading: 325.414,
        position: {
          x: 2779013.3296484053,
          y: 8435936.990969075,
          z: 562.1344378096983,
          spatialReference: SpatialReference.WebMercator
        },
        fov: 20
      } */
    });
  }

  render() {
    return (
      <div id="view">
      </div>
    );
  }
}