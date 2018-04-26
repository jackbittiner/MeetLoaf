import React, { Component } from "react";
import timeFormatter from "../utils/time-formatter";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSeconds: 0
    };
    this.secondIncrementer = null;
  }

  handleStartTimer = () => {
    this.secondIncrementer = setInterval(
      () =>
        this.setState(prevState => {
          return { numberOfSeconds: prevState.numberOfSeconds + 1 };
        }),
      1000
    );
  };

  handleStopTimer = () => {
    clearInterval(this.secondIncrementer);
  };

  render() {
    const { numberOfSeconds } = this.state;
    return (
      <div className="App">
        <p className="App-intro">{timeFormatter(numberOfSeconds)}</p>
        <button onClick={this.handleStartTimer}>Start</button>
        <button onClick={this.handleStopTimer}>Stop</button>
      </div>
    );
  }
}
