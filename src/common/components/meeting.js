import React from "react";
import timeFormatter from "../../utils/time-formatter";

const Meeting = ({ numberOfAttendees, meetingLength }) => {
  return (
    <div>
      <p>Meeting Length: {timeFormatter(meetingLength)}</p>
      <p>Number of Attendees: {numberOfAttendees}</p>
    </div>
  );
};

export default Meeting;
