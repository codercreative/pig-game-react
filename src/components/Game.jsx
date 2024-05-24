import React, { useEffect, useState } from "react";

export default function Game() {
  const [player1Total, setPlayer1Total] = useState(0);
  const [player2Total, setPlayer2Total] = useState(0);
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [diceRoll, setDiceRoll] = useState(false);
  const [isDieVisible, setIsDieVisible] = useState(false);
  const [winner, setWinner] = useState(false);
  // const [isPigFlying, setIsPigFlying] = useState(false);

  // Title state -- using time out to alternate title between "The game is on!" and "Oink!"
  const [title, setTitle] = useState("The game is on!");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitle("Oink!");

      setTimeout(() => {
        setTitle("The game is on!");
      }, 2000);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [setTitle]);

  // Check for winner state
  useEffect(() => {
    if (player1Total >= 20) {
      setWinner(true);
      setTitle("Player 1 wins!");
    } else if (player2Total >= 20) {
      setWinner(true);
      setTitle("Player 2 wins!");
    }
  }, [player1Total, player2Total]);

  // Dice roll
  const rollDice = () => {
    if (winner) return;

    const randomRoll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(randomRoll);
    setIsDieVisible(true);
    if (randomRoll === 1) {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      setPlayer1Points(0);
      setPlayer2Points(0);
    } else if (currentPlayer === 1) {
      setPlayer1Points((prevPoints) => prevPoints + randomRoll);
    } else {
      setPlayer2Points((prevPoints) => prevPoints + randomRoll);
    }
  };

  // Hold button
  const hold = () => {
    if (winner) return;

    if (currentPlayer === 1) {
      setPlayer1Total((prevTotal) => prevTotal + player1Points);
      setCurrentPlayer(2);
      setPlayer1Points(0);
    } else {
      setPlayer2Total((prevTotal) => prevTotal + player2Points);
      setCurrentPlayer(1);
      setPlayer2Points(0);
    }
  };

  return (
    <main className="game-container">
      <h1 className={`game-title ${title === "Oink!" ? "pink-text" : ""}`}>
        {title}
      </h1>

      <section className="player-container">
        <section
          className={`player ${currentPlayer === 1 ? "player-active" : ""}`}
        >
          <h2>Player 1</h2>
          <div className="player-points-container">
            <p className="player-total-points">{player1Total}</p>
            <div className="current-container">
              <h3>Current </h3>
              <p className="player-current-points">{player1Points}</p>
            </div>
          </div>
        </section>

        <div className="player-btn-container">
          <button className="reset-btn">Reset Game</button>
          {isDieVisible && (
            <img
              className="die"
              src={`assets/dice-${diceRoll}.png`}
              alt="Playing dice"
            />
          )}

          <div className="dice-action-container">
            <button
              className="roll-dice-btn"
              onClick={rollDice}
              disabled={winner}
            >
              Roll Dice
            </button>
            <button className="hold-btn" onClick={hold} disabled={winner}>
              Hold
            </button>
          </div>
        </div>

        <section
          className={`player ${currentPlayer === 2 ? "player-active" : ""}`}
        >
          <h2>Player 2</h2>
          <div className="player-points-container">
            <p className="player-total-points">{player2Total}</p>
            <div className="current-container">
              <h3>Current </h3>
              <p className="player-current-points">{player2Points}</p>
            </div>
          </div>
        </section>
      </section>

      <img
        src="assets/flying-pig.png"
        className="flying-pig"
        alt="Flying pig illustration"
      />
    </main>
  );
}
