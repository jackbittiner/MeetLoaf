import React from "react";
import { allSprints } from "../../../dummy-data/all-sprints";
import Sprint from "../../../common/components/sprint";

const CurrentSprintPage = () => {
  const currentSprint = allSprints.sprints.reduce((prev, current) => {
    return prev.y > current.y ? prev : current;
  });

  return (
    <div className="sprint">
      <Sprint sprint={currentSprint} />
    </div>
  );
};

export default CurrentSprintPage;
