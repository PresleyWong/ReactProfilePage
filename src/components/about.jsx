import React from "react";
import SocialMedia from "./socialMedia";

const About = props => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {props.data.firstName}&nbsp;
          <span className="text-primary">{props.data.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {props.data.address}
          <br />
          <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
        </div>
        <p className="lead mb-5">{props.data.description}</p>
        <div className="social-icons">
          <SocialMedia data={props.data.socialUrl} />
        </div>
      </div>
    </section>
  );
};

export default About;
