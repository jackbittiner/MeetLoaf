import React, { Component } from 'react';
import Meeting from './meeting'
import timeFormatter from '../utils/time-formatter';


const Sprint = ({meetings}) => {

    const listOfMeetings = meetings.map((meeting) => {
        return(
            <Meeting numberOfAttendees={meeting.numberOfAttendees} meetingLength={meeting.meetingLength} />
        )
    })

    const totalSprintMeetingTime = meetings.reduce((totalTime, meeting) => {
        return totalTime + (meeting.meetingLength * meeting.numberOfAttendees);
    }, 0)
    
    return(
        <div className="sprint">
            {listOfMeetings}
            <div>
                TOTAL MEETING TIME: {timeFormatter(totalSprintMeetingTime)}
            </div>
        </div>
    );
}

export default Sprint