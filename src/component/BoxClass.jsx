import React, { Component } from "react";
import { colorCases } from "../constants/config";

export default class BoxClass extends Component {
  render() {
    return (
      <div className="box" style={{ borderColor: colorCases[this.props.result] }}>
        <h1>{this.props.title}</h1>
        <p>{this.props.choice}</p>
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}
