import React, { Component } from "react";
import axios from "axios";
import timeFormatter from "../../../utils/time-formatter";
import StartSprint from "./start-sprint";
import "./timer.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSeconds: 0,
      numberOfAttendees: 0
    };
    this.secondIncrementer = null;
    this.currentSprint = null;
  }

  componentWillMount() {
    axios
      .get("http://www.localhost:3030/sprint")
      .then(response => {
        const sprint = response.data.data.pop();
        this.setState({ currentSprint: sprint });
      })
      .catch(error => console.log(error));
  }

  handleStartTimer = () => {
    if (this.secondIncrementer == null) {
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
      this.submitMeetingData();
      this.handleStopTimer();
      this.resetTimer();
    }
  };

  submitMeetingData = () => {
    axios
      .post("http://www.localhost:3030/meeting", {
        NumberOfAttendees: this.state.numberOfAttendees,
        Length: this.state.numberOfSeconds,
        sprintId: this.state.currentSprint.id
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
      <div className="container">
        <div className="timer">
          <p>{timeFormatter(numberOfSeconds)}</p>
        </div>
        <div className="startButton">
          <button className="timerButton" onClick={this.handleStartTimer}>
            Start
          </button>
        </div>
        <div className="stopButton">
          <button className="timerButton" onClick={this.handleStopTimer}>
            Stop
          </button>
        </div>
        <div className="submitButton">
          <button className="timerButton" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div className="clearButton">
          <button className="timerButton" onClick={this.handleClear}>
            Clear
          </button>
        </div>
        <div className="numberOfAttendees">
          <label for="attendeeNum">Number of attendees:</label>
          <input
            id="attendeeNum"
            min={0}
            type="number"
            value={this.state.numberOfAttendees}
            onChange={this.handleInputChange}
            placeholder="Enter"
          />
        </div>
        <div className="currentSprint">
          Current Sprint:{" "}
          {this.state.currentSprint && this.state.currentSprint.id}
        </div>
        <div className="newSprint">
          <StartSprint />
        </div>
      </div>
    );
  }
}
