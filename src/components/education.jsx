import React from "react";
import EducationItem from "./educationItem";

const Education = props => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        <EducationItem data={props.data} />
      </div>
    </section>
  );
};

export default Education;
