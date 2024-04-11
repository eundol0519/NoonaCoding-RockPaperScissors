import React, { Component } from "react";
import { colorCases } from "../constants/config";

interface PropsType {
  title: string;
  choice: string;
  result: string;
}

export default class BoxClass extends Component<PropsType> {
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
