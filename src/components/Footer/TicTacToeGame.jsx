// src/components/Footer/TicTacToeGame.jsx
import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // вертикали
  [0, 4, 8],
  [2, 4, 6], // диагонали
];

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true); // true = X ходит, false = O (ПК)
  const [winner, setWinner] = useState(null);

  // Проверка победы/ничьи
  const checkGameOver = (b) => {
    for (const [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a]; // 'X' или 'O'
      }
    }
    if (b.every((cell) => cell)) return "draw";
    return null;
  };

  // ПК ходит (случайный)
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
          setPlayerTurn(true);
          const result = checkGameOver(nb);
          if (result) setWinner(result);
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
    if (result) {
      setWinner(result);
    } else {
      setPlayerTurn(false);
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
    setWinner(null);
  };

  return (
    <div className={styles.ttt}>
      <div className={styles["ttt-board"]}>
        {board.map((cell, i) => (
          <div
            key={i}
            className={styles["ttt-cell"]}
            onClick={() => handleClick(i)}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className={styles["ttt-message"]}>
          {winner === "draw"
            ? "Ничья!"
            : winner === "X"
            ? "Вы выиграли! 🎉"
            : "ПК выиграл 😢"}
          <button className={styles["ttt-reset"]} onClick={reset}>
            Играть снова
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToeGame;
