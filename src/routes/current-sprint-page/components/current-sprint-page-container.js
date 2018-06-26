import React, { Component } from 'react';
import axios from 'axios';
import CurrentSprintPage from './current-sprint-page';

export default class CurrentSprintPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSprintId: null
    };
  }

  // TODO: http://localhost:3030/meeting?sprintId=5 use this endpoint
  componentWillMount() {
    axios
      .get(`http://localhost:3030/sprint?$limit=0`)
      .then(response => {
        const totalSprints = response.data.total;
        this.setState({ currentSprintId: totalSprints });
      })
      .catch(error => console.log('sprintId', error));
  }

  render() {
    if (this.state.currentSprintId == null) return null;
    return <CurrentSprintPage currentSprintId={this.state.currentSprintId} />;
  }
}
