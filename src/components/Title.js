import React from "react";

const Title = ({ value, winner }) => {
  if (winner === "draw") return <h1 className="title">Draw !</h1>;
  else if (winner)
    return (
      <h1 className="title">
        Winner:{" "}
        <span className={value === "X" ? "o" : "x"}>
          {value === "X" ? "O" : "X"}
        </span>
        !
      </h1>
    );
  else
    return (
      <h1 className="title">
        Turn: <span className={value === "X" ? "x" : "o"}>{value}</span>
      </h1>
    );
};

export default Title;
