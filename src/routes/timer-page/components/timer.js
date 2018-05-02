import React, { Component } from "react";
import timeFormatter from "../../../utils/time-formatter";
import { allSprints } from "../../../dummy-data/all-sprints";
import "./timer.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSeconds: 0,
      numberOfAttendees: 0
    };
    this.secondIncrementer = null;
  }

  handleStartTimer = () => {
    if(this.secondIncrementer == null){
      this.secondIncrementer = setInterval(
        () =>
          this.setState(prevState => {
            return { numberOfSeconds: prevState.numberOfSeconds + 1 };
          }),
        1000
      );
    }
  };

  handleStopTimer = () => {
    clearInterval(this.secondIncrementer);
    this.secondIncrementer = null;
  };

  handleSubmit = () => {
    if (this.state.numberOfSeconds > 0) {
      this.handleStopTimer();
      allSprints.sprints[allSprints.sprints.length - 1].meetings.push({
        id: 31,
        numberOfAttendees: parseInt(this.state.numberOfAttendees),
        meetingLength: this.state.numberOfSeconds
      });
      this.resetTimer();
    }
  };

  handleClear = () => {
    this.handleStopTimer();
    this.resetTimer();
  };

  resetTimer = () => {
    this.setState(prevState => {
      return { numberOfSeconds: 0 };
    });
  };

  handleInputChange = event => {
    this.setState({ numberOfAttendees: event.target.value });
  };

  render() {
    const { numberOfSeconds } = this.state;
    return (
      <div className="timer">
        <p className="formatted-time">{timeFormatter(numberOfSeconds)}</p>
        <button className="timer-start" onClick={this.handleStartTimer}>
          Start
        </button>
        <button className="timer-stop" onClick={this.handleStopTimer}>
          Stop
        </button>
        <button className="timer-submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <button className="timer-clear" onClick={this.handleClear}>
          Clear
        </button>
        <div className="timer-attendees">
          <label for="attendeeNum">Number of attendees:</label>
          <input
            className="timer-5"
            id="attendeeNum"
            min={0}
            type="number"
            value={this.state.numberOfAttendees}
            onChange={this.handleInputChange}
            placeholder="Enter"
          />
        </div>
      </div>
    );
  }
}
