import React from "react";
interface Props {
  achievments: string[];
}
const Achievments = ({ achievments }: Props) => {
  return (
    <>
      <h5>Achievments</h5>
      <ul>
        {achievments.map((achievment, index) => (
          <li key={index}>{achievment}</li>
        ))}
      </ul>
    </>
  );
};

export default Achievments;
