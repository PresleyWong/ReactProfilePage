import React from "react";

const ExperienceItem = props => {
  const collection = props.data.map((d, i) => {
    return (
      <div
        className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        key={i}
      >
        <div className="resume-content">
          <h3 className="mb-0">{d.position}</h3>
          <div className="subheading mb-3">
            <a href={d.companyUrl} target="_blank" rel="noopener noreferrer">
              {d.companyName}
            </a>
          </div>
          <p>{d.description}</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{d.time}</span>
        </div>
      </div>
    );
  });

  return collection;
};

export default ExperienceItem;
