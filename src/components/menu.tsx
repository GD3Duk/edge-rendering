import * as React from "react";
import * as urban from "../assets/urban.png";
import * as touristic from "../assets/touristic.png";

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
      <div className="intro-container">
        <h1 className="title">Edge rendering</h1>
        <div className="menu">
          <div className="menu-item">
            <img src={urban} alt="urban visualization" onClick = {(event: any) => this.props.handleSceneChange("urban")}/>
          </div>
          <div className="menu-item">
            <img src={touristic} alt="urban visualization" onClick = {(event: any) => this.props.handleSceneChange("touristic")}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}