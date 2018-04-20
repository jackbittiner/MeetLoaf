import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sprint from './components/sprint';

class MeetingTracker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfSeconds: 0,
    }
    this.secondIncrementer = null;
  }


  handleStartTimer = () => {
    this.secondIncrementer = setInterval( () => this.setState((prevState) => {
      return {numberOfSeconds: prevState.numberOfSeconds + 1};
    }), 1000);
  }

  handleStopTimer = () => {
    clearInterval(this.secondIncrementer);
  }

  render() {
    const {numberOfSeconds} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {timeFormatter(numberOfSeconds)}
        </p>
        <button onClick={this.handleStartTimer}>Start</button>
        <button onClick={this.handleStopTimer}>Stop</button>
        <Sprint meetings={currentSprint.meetings} />
      </div>
    );
  }
}

const timeFormatter = (numberOfSeconds) => {
  const hours   = Math.floor(numberOfSeconds / 3600);
  const minutes = Math.floor((numberOfSeconds - (hours * 3600)) / 60);
  const seconds = numberOfSeconds - (hours * 3600) - (minutes * 60);

  var result = (hours < 10 ? "0" + hours : hours);
      result += " : " + (minutes < 10 ? "0" + minutes : minutes);
      result += " : " + (seconds  < 10 ? "0" + seconds : seconds);
  return result;
}

export default MeetingTracker;


const currentSprint = {
    meetings: [
      {
        id: 1,
        numberOfAttendees: 4,
        meetingLength: 3600
      },
      {
        id: 2,
        numberOfAttendees: 3,
        meetingLength: 3000
      },
      {
        id: 3,
        numberOfAttendees: 5,
        meetingLength: 1800
      },
      {
        id: 4,
        numberOfAttendees: 5,
        meetingLength: 1000
      },
      {
        id: 5,
        numberOfAttendees: 4,
        meetingLength: 3500
      },
      {
        id: 6,
        numberOfAttendees: 5,
        meetingLength: 3333
      }
  ]
}