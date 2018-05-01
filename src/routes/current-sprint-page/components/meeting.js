import React from "react";
import timeFormatter from "../../../utils/time-formatter";
import "./meeting.css";

const Meeting = ({ numberOfAttendees, meetingLength }) => {
  return (
    <div>
      <p className="meeting-length">
        Meeting Length: {timeFormatter(meetingLength)}
      </p>
      <p>Number of Attendees: {numberOfAttendees}</p>
    </div>
  );
};

export default Meeting;
