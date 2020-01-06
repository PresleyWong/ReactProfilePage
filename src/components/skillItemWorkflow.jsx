import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SkillItemWorkflow = props => {
  const collection = props.data.workflows.map((d, i) => {
    return (
      <li key={i}>
        <FontAwesomeIcon icon={faCheck} listItem />
        {d}
      </li>
    );
  });

  return collection;
};

export default SkillItemWorkflow;
