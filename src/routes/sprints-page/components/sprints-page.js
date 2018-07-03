import React, { Component } from "react";

export default class SprintsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprints: []
    };
  }

  render() {
    const listOfSprints = this.props.sprints.map(sprint => {
      return (
        <a href={"/sprint?id=" + sprint.id}>
          <button>{sprint.id}</button>
        </a>
      );
    });

    return <div className="sprints">{listOfSprints}</div>;
  }
}
