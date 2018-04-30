import React, { Component } from "react";
import timeFormatter from "../utils/time-formatter";
import { allSprints } from "../dummy-data/all-sprints";

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

  handleSubmit = () => {
    if(this.state.numberOfSeconds > 0) {
      this.handleStopTimer();
        allSprints.sprints[allSprints.sprints.length - 1].meetings.push(
          {
          id: 31,
          numberOfAttendees: 5,
          meetingLength: this.state.numberOfSeconds
        }
      );
      this.resetTimer();
    }
  }

  handleClear = () => {
    this.handleStopTimer();
    this.resetTimer();
  }

  resetTimer = () => {
    this.setState(prevState => {
      return { numberOfSeconds: 0 };
    })
  }

  render() {
    const { numberOfSeconds } = this.state;
    return (
      <div className="App">
        <p className="App-intro">{timeFormatter(numberOfSeconds)}</p>
        <button onClick={this.handleStartTimer}>Start</button>
        <button onClick={this.handleStopTimer}>Stop</button>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
