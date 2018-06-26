import React, { Component } from 'react';
import axios from 'axios';
import Sprint from '../../../common/components/sprint';

export default class CurrentSprintPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprint: []
    };
  }

  // TODO: http://localhost:3030/meeting?sprintId=5 use this endpoint
  componentWillMount() {
    console.log(this.props);
    axios
      .get(
        `http://www.localhost:3030/meeting?sprintId=${
          this.props.currentSprintId
        }`
      )
      .then(response => {
        console.log(response.data);
        const meetings = response.data.data.map(m => {
          return {
            id: m.id,
            numberOfAttendees: m.NumberOfAttendees,
            meetingLength: m.Length
          };
        });
        this.setState({ sprint: meetings });
      })
      .catch(error => console.log('sprintData', error));
  }

  render() {
    return (
      <div className="sprint">
        <Sprint sprint={this.state.sprint} />
      </div>
    );
  }
}
