import React, { useEffect, useState } from "react";

export default function Game() {
  const [player1Total, setPlayer1Total] = useState(0);
  const [player2Total, setPlayer2Total] = useState(0);
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);

  // Title state
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

  return (
    <main className="game-container">
      <h1 className={`game-title ${title === "Oink!" ? "pink-text" : ""}`}>
        {title}
      </h1>

      <section className="player-container">
        <section className="player player-active">
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
          <img className="die" src="assets/dice-6.png" alt="Playing dice" />
          <div className="dice-action-container">
            <button className="roll-dice-btn">Roll Dice</button>
            <button className="hold-btn">Hold </button>
          </div>
        </div>

        <section className="player">
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
