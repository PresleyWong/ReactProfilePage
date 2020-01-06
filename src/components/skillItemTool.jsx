import React from "react";

const SkillItemTool = props => {
  const collection = props.data.tools.map((d, i) => {
    return <li key={i}>{d}</li>;
  });

  return collection;
};

export default SkillItemTool;
