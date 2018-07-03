import React, { Component } from "react";
import axios from "axios";
import SprintPage from "./sprint-page";

export default class CurrentSprintPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSprintId: null
    };
  }

  componentWillMount() {
    axios
      .get(`http://localhost:3030/sprint?$limit=0`)
      .then(response => {
        const totalSprints = response.data.total;
        this.setState({ currentSprintId: totalSprints });
      })
      .catch(error => console.log("sprintId", error));
  }

  render() {
    if (this.state.currentSprintId == null) return null;
    return <SprintPage currentSprintId={this.state.currentSprintId} />;
  }
}
