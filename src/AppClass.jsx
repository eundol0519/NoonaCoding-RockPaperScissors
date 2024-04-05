import React, { Component } from "react";
import BoxClass from "./component/BoxClass";
import { winOrLoseCases } from "./constants/config";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userChoice: null,
      computerChoice: null,
      result: { user: null, computer: null },
    };
  }

  userChoiceHandler = (userChoice) => {
    const computerChoice = this.computerChoiceHandler();
    const result = this.resultHandler(userChoice, computerChoice);

    this.setState({
      userChoice: userChoice,
      computerChoice: computerChoice,
      result: result || { user: null, computer: null },
    });
  };

  computerChoiceHandler = () => {
    const random = Math.floor(Math.random() * 3);
    return Object.keys(winOrLoseCases)[random];
  };

  resultHandler = (userChoice, computerChoice) => {
    if (!userChoice || !computerChoice) return;

    return {
      user: winOrLoseCases[userChoice][computerChoice],
      computer: winOrLoseCases[computerChoice][userChoice],
    };
  };

  render() {
    return (
      <>
        <div className="boxs">
          <BoxClass title="User" choice={this.state.userChoice} result={this.state.result.user} />
          <BoxClass title="Computer" choice={this.state.computerChoice} result={this.state.result.computer} />
        </div>
        <div className="choiceBox">
          {Object.keys(winOrLoseCases).map((item) => {
            return (
              <p
                key={item}
                onClick={() => {
                  this.userChoiceHandler(item);
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
      </>
    );
  }
}
