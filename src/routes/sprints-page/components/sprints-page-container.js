import React, { Component } from 'react';
import axios from 'axios';
import SprintsPage from './sprints-page';

export default class SprintsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSprintIds: null,
      allSprints: []
    };
  }

  componentWillMount() {
    axios
      .get(`http://localhost:3030/sprint?$select[]=id`)
      .then(response => {
        const allSprintIds = response.data.data;
        this.setState({ allSprintIds: allSprintIds });
      })
      .catch(error => console.log('something else', error));
  }

  render() {
    if (this.state.allSprintIds == null) return null;
    return <SprintsPage sprints={this.state.allSprintIds} />;
  }
}
