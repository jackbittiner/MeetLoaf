import React, { Component } from 'react';
import Meeting from './meeting'


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
        <div class="sprint">
            <ul>
                {listOfMeetings}
            </ul>

            <div>
                TOTAL MEETING TIME: {totalSprintMeetingTime}
            </div>
        </div>
    );
}

export default Sprint