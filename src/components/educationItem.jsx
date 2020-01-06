import React from "react";

const EducationItem = props => {
  const collection = props.data.map((d, i) => {
    return (
      <div
        className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        key={i}
      >
        <div className="resume-content">
          <h3 className="mb-0">
            <a href={d.universityUrl} target="_blank" rel="noopener noreferrer">
              {d.universityName}
            </a>
          </h3>
          <div className="subheading mb-3">{d.course}</div>
          <p>GPA: {d.gpa}</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{d.time}</span>
        </div>
      </div>
    );
  });

  return collection;
};

export default EducationItem;
