import React from "react";
import ExperienceItem from "./experienceItem";

const Experience = props => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        <ExperienceItem data={props.data} />
      </div>
    </section>
  );
};

export default Experience;
