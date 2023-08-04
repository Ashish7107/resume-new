import React from "react";
interface Props {
  heading: string;
  degree: string;
  year: string;

  percentage: string;
}

const Education = ({ heading, degree, year, percentage }: Props) => {
  return (
    <>
      <div
        className="card border-info mb-3 "
        style={{ color: "rgb(65, 65, 147)" }}
      >
        <div className="card-body">
          <p>{heading}</p>
          <p>{degree}</p>
          <p>{year}</p>
          <p>{percentage}</p>
        </div>
      </div>
    </>
  );
};

export default Education;
