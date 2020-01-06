import React from "react";
import InterestItem from "./interestItem";

const Interests = props => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="interests"
    >
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        <InterestItem data={props.data} />
      </div>
    </section>
  );
};

export default Interests;
