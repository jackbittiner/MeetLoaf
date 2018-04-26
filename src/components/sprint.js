import React from "react";
import Meeting from "./meeting";
import timeFormatter from "../utils/time-formatter";
import { currentSprint } from "../dummy-data/current-sprint";

const Sprint = () => {
  const listOfMeetings = currentSprint.meetings.map(meeting => {
    return (
      <Meeting
        numberOfAttendees={meeting.numberOfAttendees}
        meetingLength={meeting.meetingLength}
        key={meeting.id}
      />
    );
  });

  const totalSprintMeetingTime = currentSprint.meetings.reduce(
    (totalTime, meeting) => {
      return totalTime + meeting.meetingLength * meeting.numberOfAttendees;
    },
    0
  );

  return (
    <div className="sprint">
      {listOfMeetings}
      <div>TOTAL MEETING TIME: {timeFormatter(totalSprintMeetingTime)}</div>
    </div>
  );
};

export default Sprint;
