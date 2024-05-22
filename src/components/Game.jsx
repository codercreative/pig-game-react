import React, { useState } from "react";

export default function Game() {
  const { player1Total, setPlayer1Total } = useState(0);
  const { player2Total, setPlayer2Total } = useState(0);
  const { player1Points, setPlayer1Points } = useState(0);
  const { player2Points, setPlayer2Points } = useState(0);

  // Title state
  const [title, setTitle] = useState("The game is on!");

  setTimeout(() => {
    setTitle("The game is on!");

    setTimeout(() => {
      setTitle("Oink!");
    }, 2000);
  }, 2000);

  return (
    <main className="game-container">
      <h1 className={`game-title ${title === "Oink!" ? "pink-text" : ""}`}>
        {title}
      </h1>

      <section className="player-container">
        <section className="player player-active">
          <h2>Player 1</h2>
          <div className="player-points-container">
            <p>{player1Total}</p>
            <div className="current-container">
              <h3>Current </h3>
              <p>{player1Points}</p>
            </div>
          </div>
        </section>

        <div className="player-btn-container">
          <button className="reset-btn">Reset Game</button>
          <img className="die" src="assets/dice-6.png" alt="Playing dice" />
          <button className="roll-dice-btn">Roll Dice</button>
          <button className="hold-btn">Hold </button>
        </div>

        <section className="player player-not-active">
          <h2>Player 2</h2>
          <div className="player-points-container">
            <p>{player2Total}</p>
            <div className="current-container">
              <h3>Current </h3>
              <p>{player2Points}</p>
            </div>
          </div>
        </section>
      </section>

      <img src="assets/flying-pig.png" alt="Flying pig illustration" />
    </main>
  );
}
