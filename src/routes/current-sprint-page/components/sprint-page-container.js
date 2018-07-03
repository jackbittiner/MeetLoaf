import React, { Component } from "react";
import SprintPage from "./sprint-page";
import queryString from "query-string";

export default class SprintPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprintId: null
    };
  }

  componentWillMount() {
    const sprint = queryString.parse(this.props.location.search);
    this.setState({ sprintId: sprint.id });
  }

  render() {
    if (this.state.sprintId == null) return null;
    return <SprintPage currentSprintId={this.state.sprintId} />;
  }
}
