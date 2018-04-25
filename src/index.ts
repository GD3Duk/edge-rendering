import "./config";
import "./css/main.scss";
import SceneView = require("esri/views/SceneView");
import urbanPlanningScene from "./components/urbanPlanning";
import SpatialReference = require("esri/geometry/SpatialReference");


const view = new SceneView({
  container: "view",
  map: urbanPlanningScene,
  qualityProfile: "high",
  environment: {
    lighting: {
      directShadowsEnabled: true,
      ambientOcclusionEnabled: true,
    }
  },
  camera: {
    tilt: 60.55,
    heading: 325.414,
    position: {
      x: 2779013.3296484053,
      y: 8435936.990969075,
      z: 562.1344378096983,
      spatialReference: SpatialReference.WebMercator
    },
    fov: 20
  }
});


(<any>window).view = view;