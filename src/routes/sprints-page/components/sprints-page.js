import React from "react";
import { allSprints } from "../../../dummy-data/all-sprints";
import Sprint from "../../../common/components/sprint";

const SprintsPage = () => {
  const listOfSprints = allSprints.sprints.map(sprint => {
    return <Sprint sprint={sprint} />;
  });

  return <div className="sprints">{listOfSprints}</div>;
};

export default SprintsPage;