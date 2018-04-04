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
          {numberOfSeconds}
        </p>
        <button onClick={this.handleStartTimer}>Start</button>
      </div>
    );
  }
}

export default MeetingTracker;
