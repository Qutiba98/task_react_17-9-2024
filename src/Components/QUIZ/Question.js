import React from "react";

const Question = ({ text }) => {
  return (
    <div className="question-text">
      <h2>{text}</h2>
    </div>
  );
};

export default Question;
