import { useEffect, useState } from "react";
import Board from "./components/Board";
import ResetButton from "./components/ResetButton";
import Title from "./components/Title";

function App() {
  const [values, setValues] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true); // it is X's turn if true
  const [winner, setWinner] = useState(null);
  const [numMoves, setNumMoves] = useState(0);

  useEffect(() => {
    const res = calculateWinner(values);
    if (res === null && numMoves === 9) setWinner("draw");
    else setWinner(res);
  }, [values]);

  function handleClick(index) {
    if (winner === null) {
      setValues((values) => {
        let arr = [...values];
        if (turn && arr[index] === null) arr[index] = "X";
        else if (arr[index] === null) arr[index] = "O";

        return arr;
      });
      // It works becase values is not re-rendered and updated until this function finishes (I think)
      if (values[index] === null) setTurn((turn) => !turn);

      setNumMoves((num) => num + 1);
    }
  }

  function resetGame() {
    setValues(Array(9).fill(null));
    setTurn(true);
    setNumMoves(0);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="wrapper">
      <ResetButton onClick={resetGame} />
      <Title value={turn ? "X" : "O"} winner={winner} />
      <Board values={values} handleClick={handleClick} />
    </div>
  );
}

export default App;
