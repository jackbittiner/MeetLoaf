import React, { Component } from 'react';
import Meeting from './meeting'
import timeFormatter from '../utils/time-formatter';


const Sprint = ({meetings}) => {

    const listOfMeetings = meetings.map((meeting) => {
        return(
            <li>
            <Meeting numberOfAttendees={meeting.numberOfAttendees} meetingLength={meeting.meetingLength} />
            </li>
        )
    })

    const totalSprintMeetingTime = meetings.reduce((totalTime, meeting) => {
        return totalTime + (meeting.meetingLength * meeting.numberOfAttendees);
    }, 0)
    
    return(
        <div className="sprint">
            <ul>
                {listOfMeetings}
            </ul>

            <div>
                TOTAL MEETING TIME: {timeFormatter(totalSprintMeetingTime)}
            </div>
        </div>
    );
}

export default Sprint