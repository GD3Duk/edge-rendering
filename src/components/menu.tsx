import * as React from "react";
import * as urban from "../assets/urban.png";
import * as touristic from "../assets/touristic.png";
import * as night from "../assets/night.png";
import * as old from "../assets/old.png";

interface MenuProps {
  handleSceneChange(event: any): void;
  webscene: string | null;
}

export default class Menu extends React.Component<MenuProps, any> {
  constructor(props: MenuProps) {
    super(props);
  }

  render() {
    return (
      <div className={ "intro " + (this.props.webscene ? "low" : "") }>
        <div className="description">
          <h1 className="title">Edge rendering</h1>
          <p>For city visualizations:
            <span className="urban"
            onClick = {(event: any) => this.props.handleSceneChange("urban")}
            > Helsinki old buildings</span>,
            <span className="touristic"> Famous buildings in Paris</span>,
            <span className="night"> Manhattan by night</span>,
            <span className="old"> Old scene of Lyon</span>.
          </p>
          <p className="info"> using <a href="https://developers.arcgis.com/javascript/" target="_blank">ArcGIS API for JS </a>
          and data from awesome contributors to <a href="https://livingatlas.arcgis.com/en/" target="_blank">The Living Atlas</a>.
          Fork me on <a href="https://github.com/RalucaNicola/edge-rendering" target="_blank">Github</a>!</p>
        </div>
        <div className="menu">
          <div className="menu-item">
            <img className="urban" src={urban} alt="urban cartography"
              onClick = {(event: any) => this.props.handleSceneChange("urban")}
            />
          </div>
          <div className="menu-item">
            <img className="touristic" src={touristic} alt="tourist map"
              onClick = {(event: any) => this.props.handleSceneChange("touristic")}
            />
          </div>
          <div className="menu-item night">
            <img className="night" src={night} alt="Manhattan by night"
              onClick = {(event: any) => this.props.handleSceneChange("night")}
            />
          </div>
          <div className="menu-item old">
            <img className="old" src={old} alt="Old map of Lyon"
              onClick = {(event: any) => this.props.handleSceneChange("old")}
            />
          </div>
        </div>
      </div>
    );
  }
}