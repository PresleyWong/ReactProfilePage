import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SkillItemTool = props => {
  const collection = props.data.tools.map((d, i) => {
    return (
      <li key={i}>
        <FontAwesomeIcon icon={faBookmark} listItem />
        {d}
      </li>
    );
  });

  return collection;
};

export default SkillItemTool;
