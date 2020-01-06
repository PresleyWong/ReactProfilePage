import React from "react";
import SkillItemTool from "./skillItemTool";
import SkillItemWorkflow from "./skillItemWorkflow";

// import {
//   faHtml5,
//   faCss3Alt,
//   faJsSquare,
//   faReact,
//   faBootstrap,
//   faPython
// } from "@fortawesome/free-brands-svg-icons";

const Skills = props => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="fa-ul">
          <SkillItemTool data={props.data[0]} />
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <SkillItemWorkflow data={props.data[1]} />
        </ul>
      </div>
    </section>
  );
};

export default Skills;
