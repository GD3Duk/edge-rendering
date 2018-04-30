import * as React from "react";
import * as urban from "../assets/urban.png";
import * as touristic from "../assets/touristic.png";

console.log(urban);

export default class Menu extends React.Component {
  render() {
    return (
    <div className="intro">
      <div className="intro-container">
        <h1 className="title">Edge rendering</h1>
        <div className="menu">
          <div className="menu-item">
            <img src={urban} alt="urban visualization"/>
          </div>
          <div className="menu-item">
            <img src={touristic} alt="urban visualization"/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}