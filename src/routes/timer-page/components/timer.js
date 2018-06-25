import React, { Component } from 'react';
import axios from 'axios';
import timeFormatter from '../../../utils/time-formatter';
import './timer.css';
import StartSprint from './start-sprint';

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
      .get('http://www.localhost:3030/sprint')
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
      .post('http://www.localhost:3030/meeting', {
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
      <container>
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

        <StartSprint />
      </container>
    );
  }
}
