import React from 'react';
import timeFormatter from '../utils/time-formatter';


const Meeting = ({numberOfAttendees, meetingLength}) => {
    return(
        <div className="meeting">
            <p>Number of Attendees: {numberOfAttendees}</p>
            <p>Meeting Length: {timeFormatter(meetingLength)}</p>
        </div>
    );
}

export default Meeting;
