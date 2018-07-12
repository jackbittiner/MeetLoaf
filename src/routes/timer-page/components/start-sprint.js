import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function StartSprint() {
  const handleStartSprint = () => {
    submitSprintData();
  };

  const submitSprintData = () => {
    axios
      .post('http://www.localhost:3030/sprint', {})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      className="start-sprint"
      onClick={handleStartSprint}
    >
      New Sprint
    </Button>
  );
}
