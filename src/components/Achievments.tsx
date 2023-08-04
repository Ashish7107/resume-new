import React from "react";
interface Props {
  achievments: string[];
}
const Achievments = ({ achievments }: Props) => {
  return (
    <>
      <h3>Achievments</h3>
      <ul>
        {achievments.map((achievment, index) => (
          <li key={index}>{achievment}</li>
        ))}
      </ul>
    </>
  );
};

export default Achievments;
