import React, { Component } from "react";
import "./sprints-page.css";

import Button from "@material-ui/core/Button";

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
        <div className="sprintButton">
          <a href={"/sprint?id=" + sprint.id}>
            <Button variant="contained" color="primary">
              Sprint {sprint.id}
            </Button>
          </a>
        </div>
      );
    });

    return <div className="sprints">{listOfSprints}</div>;
  }
}
