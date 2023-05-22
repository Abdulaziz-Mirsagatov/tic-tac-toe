import React from "react";

const ResetButton = ({ onClick }) => {
  return (
    <button className="reset-btn btn" onClick={onClick}>
      Reset
    </button>
  );
};

export default ResetButton;
