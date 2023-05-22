import React from "react";
import Square from "./Square";

const Board = ({ values, handleClick }) => {
  const squares = [];
  for (let i = 0; i < 9; i++)
    squares.push(
      <Square key={i} value={values[i]} onClick={() => handleClick(i)} />
    );

  return <div className="board">{squares}</div>;
};

export default Board;
