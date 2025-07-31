import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";

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

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  const checkGameOver = (b) => {
    for (const [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        setWinningLine([a, b1, c]);
        return b[a];
      }
    }
    if (b.every((cell) => cell)) return "draw";
    return null;
  };

  useEffect(() => {
    if (!playerTurn && !winner) {
      const timeout = setTimeout(() => {
        const empties = board
          .map((v, i) => (v === null ? i : null))
          .filter((i) => i !== null);
        if (empties.length) {
          const idx = empties[Math.floor(Math.random() * empties.length)];
          const nb = board.slice();
          nb[idx] = "O";
          setBoard(nb);
          const result = checkGameOver(nb);
          if (result) setWinner(result);
          setPlayerTurn(true);
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [playerTurn, board, winner]);

  const handleClick = (i) => {
    if (!playerTurn || board[i] || winner) return;
    const nb = board.slice();
    nb[i] = "X";
    setBoard(nb);
    const result = checkGameOver(nb);
    if (result) setWinner(result);
    else setPlayerTurn(false);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
    setWinner(null);
    setWinningLine([]);
  };

  return (
    <div className={`${styles.ttt} ${winner === "O" ? styles.shake : ""}`}>
      <div className={styles["ttt-board"]}>
        {board.map((cell, i) => (
          <div
            key={i}
            className={`${styles["ttt-cell"]} ${
              winningLine.includes(i) ? styles["ttt-win"] : ""
            }`}
            onClick={() => handleClick(i)}
          >
            {cell && (
              <span
                className={cell === "X" ? styles["ttt-x"] : styles["ttt-o"]}
              >
                {cell}
              </span>
            )}
          </div>
        ))}
      </div>
      {winner && (
        <div className={styles["ttt-message"]}>
          {winner === "draw"
            ? "Ничья 🤝"
            : winner === "X"
            ? "Вы выиграли! 🎉"
            : "ПК выиграл 😢"}
          <button className={styles["ttt-reset"]} onClick={reset}>
            Играть снова 🔁
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToeGame;
