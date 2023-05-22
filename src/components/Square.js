import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className={value === "X" ? "square btn x" : "square btn o"}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
