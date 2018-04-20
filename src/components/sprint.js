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
    
    return(
        <div class="sprint">
            <ul>
                {listOfMeetings}
            </ul>
        </div>
    );
}

export default Sprint