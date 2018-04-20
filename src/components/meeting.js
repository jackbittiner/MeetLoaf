import React from 'react';


const Meeting = ({numberOfAttendees, meetingLength}) => {
    return(
        <div class="meeting">
            <p>Number of Attendees: {numberOfAttendees}</p>
            <p>Meeting Length: {meetingLength}</p>
        </div>
    );
}

export default Meeting;
