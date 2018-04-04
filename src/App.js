import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MeetingTracker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfSeconds: 0
    }
  }

  handleStartTimer = () => {
    setInterval( () => this.setState((prevState) => {
      return {numberOfSeconds: prevState.numberOfSeconds + 1};
    }), 1000);
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
