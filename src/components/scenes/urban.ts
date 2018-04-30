
import WebScene = require("esri/WebScene");

import SceneLayer = require("esri/layers/SceneLayer");
import FeatureLayer = require("esri/layers/FeatureLayer");
import VectorTileLayer = require("esri/layers/VectorTileLayer");

import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import PolygonSymbol3D = require("esri/symbols/PolygonSymbol3D");

import ClassBreaksRenderer = require("esri/renderers/ClassBreaksRenderer");
import MeshSymbol3D = require("esri/symbols/MeshSymbol3D");
import FillSymbol3DLayer = require("esri/symbols/FillSymbol3DLayer");
import SolidEdges3D = require("esri/symbols/edges/SolidEdges3D");

const webscene = new WebScene({
  portalItem: {
    id: "7c694e6a153345b1b882ba1bc59f96eb"
  }
});

const buildingsLayer = new SceneLayer({
  url: "http://services2.arcgis.com/cFEFS0EWrhfDeVw9/ArcGIS/rest/services/STM____F_Helsinki__Textured_buildings_with_attributes/SceneServer/layers/0",
  elevationInfo: {
    mode: "absolute-height",
    offset: -2
  },
  renderer: new ClassBreaksRenderer({
    field: "yearCompleted",
    defaultSymbol: new MeshSymbol3D({
      symbolLayers: [
        new FillSymbol3DLayer({
          material: {
            color: "#ffffff",
            colorMixMode: "replace"
          },
          edges: new SolidEdges3D({
            color: [0, 0, 0, 0.9],
            size: 1
          })
        })
      ]
    }),
    classBreakInfos: [{
        minValue: 0,
        maxValue: 1875,
        symbol: new MeshSymbol3D({
          symbolLayers: [
            new FillSymbol3DLayer({
              material: {
                color: "#ffcc00",
                colorMixMode: "replace"
              },
              edges: new SolidEdges3D({
                color: [128, 102, 0, 1],
                size: 1
              })
            })
          ]
        })
      },
      {
        minValue: 1876,
        maxValue: 2050,
        symbol: new MeshSymbol3D({
          symbolLayers: [
            new FillSymbol3DLayer({
              material: {
                color: "#ffffff",
                colorMixMode: "replace"
              },
              edges: new SolidEdges3D({
                color: [0, 0, 0, 0.9],
                size: 1
              })
            })
          ]
        })
      }
    ]
  })
});
var oldAreaLayer = new FeatureLayer({
  url: "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/ArcGIS/rest/services/helsinki_construction_area/FeatureServer/0",
  renderer: new SimpleRenderer({
    symbol: new PolygonSymbol3D({
      symbolLayers: [new FillSymbol3DLayer({
        material:{
          color: "#ffcc00"
        }
      })]
    })
  }),
  opacity: 0.5
});

var basemap = new VectorTileLayer({
   portalItem: {
    id: "dfb04de5f3144a80bc3f9f336228d24a"
  }
});

webscene.addMany([basemap, oldAreaLayer, buildingsLayer]);

export default webscene;