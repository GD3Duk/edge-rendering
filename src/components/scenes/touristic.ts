
import WebScene = require("esri/WebScene");

import SceneLayer = require("esri/layers/SceneLayer");
import VectorTileLayer = require("esri/layers/VectorTileLayer");

import Basemap = require("esri/Basemap");

import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import MeshSymbol3D = require("esri/symbols/MeshSymbol3D");
import FillSymbol3DLayer = require("esri/symbols/FillSymbol3DLayer");
import SketchEdges3D = require("esri/symbols/edges/SketchEdges3D");
import * as parisStyle from '../../basemap-styles/paris.json';


// original style from http://www.arcgis.com/home/item.html?id=0d5695666b4c46d6abb5715fc0572d6b
const basemap = new VectorTileLayer({
  url: "https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer"
});
basemap.loadStyle(parisStyle);

const webscene = new WebScene({
  basemap: new Basemap({
    baseLayers: [basemap]
  }),
  ground: "world-elevation"
});

const buildingsLayer = new SceneLayer({
  url: "http://maps.esrifrance.fr/server/rest/services/Hosted/Batiments_Remarquables_Paris/SceneServer/layers/0",
  elevationInfo: {
    mode: "absolute-height",
    offset: 10
  },
  renderer: new SimpleRenderer({
    symbol: new MeshSymbol3D({
      symbolLayers: [
        new FillSymbol3DLayer({
          material: {
            color: "#ffffff",
            colorMixMode: "replace"
          },
          edges: new SketchEdges3D({
            color: [121, 69, 211, 1],
            size: 2,
            extensionLength: 3
          })
        })
      ]
    })
  })
});

webscene.addMany([buildingsLayer]);

export default webscene;