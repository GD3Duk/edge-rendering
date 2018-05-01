
import WebScene = require("esri/WebScene");

import SceneLayer = require("esri/layers/SceneLayer");
import VectorTileLayer = require("esri/layers/VectorTileLayer");

import Basemap = require("esri/Basemap");

import UniqueValueRenderer = require("esri/renderers/UniqueValueRenderer");
import MeshSymbol3D = require("esri/symbols/MeshSymbol3D");
import FillSymbol3DLayer = require("esri/symbols/FillSymbol3DLayer");
import SolidEdges3D = require("esri/symbols/edges/SolidEdges3D");

import * as novaStyle from '../../basemap-styles/nova.json';

const novaBaseLayer = new VectorTileLayer({
  url: "https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer"
});
novaBaseLayer.loadStyle(novaStyle);

const webscene = new WebScene({
  basemap: new Basemap({
    baseLayers: [novaBaseLayer]
  }),
  ground: "world-elevation"
});

const buildingsLayer = new SceneLayer({
  url: "https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Buildings_Manhattan/SceneServer",
  renderer: new UniqueValueRenderer({
    field: "TOP20",
    uniqueValueInfos: [{
      value: 1,
      symbol: new MeshSymbol3D({
        symbolLayers: [new FillSymbol3DLayer({
          material: {
            color: "#001d2d"
          },
          edges: new SolidEdges3D({
            size: 3,
            color: "#69dde5"
          })
        })]
      })
    }, {
      value: 0,
      symbol: new MeshSymbol3D({
        symbolLayers: [new FillSymbol3DLayer({
          material: {
            color: [0, 29, 45, 1]
          },
          edges: new SolidEdges3D({
            size: 1,
            color: [105, 221, 229, 1]
          })
        })]
      })
    }]
  })
});

webscene.add(buildingsLayer);

export default webscene;