import React from "react";

const InterestItem = props => {
  const collection = props.data.map((d, i) => {
    return <p key={i}>{d}</p>;
  });

  return collection;
};

export default InterestItem;
