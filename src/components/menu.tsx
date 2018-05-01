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
        <p>for city visualization</p>
        <p>using #esriJS</p>
      </div>
      <div className="intro-container">
        <div className="menu">
          <div className="menu-item">
            <img src={urban} alt="urban cartography"
              onClick = {(event: any) => this.props.handleSceneChange("urban")}
            />
          </div>
          <div className="menu-item">
            <img src={touristic} alt="tourist map"
              onClick = {(event: any) => this.props.handleSceneChange("touristic")}
            />
          </div>
          <div className="menu-item">
            <img src={night} alt="Manhattan by night"
              onClick = {(event: any) => this.props.handleSceneChange("night")}
            />
          </div>
          <div className="menu-item">
            <img src={old} alt="Old map of Lyon"
              onClick = {(event: any) => this.props.handleSceneChange("old")}
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
}