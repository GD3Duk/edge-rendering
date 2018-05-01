import WebScene = require("esri/WebScene");
import SceneLayer = require("esri/layers/SceneLayer");

import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import MeshSymbol3D = require("esri/symbols/MeshSymbol3D");
import FillSymbol3DLayer = require("esri/symbols/FillSymbol3DLayer");
import SolidEdges3D = require("esri/symbols/edges/SolidEdges3D");

const webscene = new WebScene({
  portalItem: { // autocasts as new PortalItem()
    id: "fb79613fb32543dbb2d5c9d1ca38a8b8"
  }
});

const buildingsLayer = new SceneLayer({
  url: "https://tiles.arcgis.com/tiles/d3voDfTFbHOCRwVR/arcgis/rest/services/Batiments_Lyon_3D_2012/SceneServer/layers/0",
  renderer: new SimpleRenderer({
    symbol: new MeshSymbol3D({
      symbolLayers: [
        new FillSymbol3DLayer({
          edges: new SolidEdges3D({
            color: [0, 0, 0, 0.7],
            size: 2,
          })
        })
      ]
    })
  })
});

webscene.add(buildingsLayer);

export default webscene;