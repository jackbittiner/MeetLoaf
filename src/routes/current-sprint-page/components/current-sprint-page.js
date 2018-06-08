import React, { Component } from "react";
import axios from "axios";
import Sprint from "../../../common/components/sprint";

export default class CurrentSprintPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprint: []
    };
  }

  componentWillMount(){
    axios
      .get("http://www.localhost:3030/meeting")
      .then(response => {
        const meetings = response.data.data.map(m => {
          return {
            id: m.id,
            numberOfAttendees: m.NumberOfAttendees,
            meetingLength: m.Length
          };
        });
        this.setState({sprint: meetings});
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="sprint">
        <Sprint sprint={this.state.sprint} />
        </div>
      );
    }
};
