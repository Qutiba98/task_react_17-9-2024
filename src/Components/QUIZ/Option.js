import React from "react";

const Option = ({ optionText, handleClick }) => {
  return (
    <button className="option-button" onClick={handleClick}>
      {optionText}
    </button>
  );
};

export default Option;
