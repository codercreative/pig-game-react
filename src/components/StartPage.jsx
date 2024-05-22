import React from "react";

export default function StartPage({ onStartClick }) {
  return (
    <section className="start-page">
      <h1 className="start-page-title">Welcome to the Pig Game!</h1>
      <p>
        Join the adventure of flying pigs and rolling dice in this game of pure
        chance and little strategy 😄🐷
      </p>
      <h2>How to play</h2>
      <ul className="instruction-list">
        <li>Be the first to reach 100 points.</li>
        <li>Roll the dice.</li>
        <li>If you roll a 1, you lose your current points for this turn.</li>
        <li>
          Roll the dice as many times as you want, or choose to hold and save
          points.
        </li>
      </ul>

      <h2>Are you ready to roll?</h2>
      <p>Click &#x0022;Start Game&#x0022; to test your luck.</p>
      <button className="start-game-btn" onClick={onStartClick}>
        Start Game
      </button>
      <img
        className="flying-pig-img"
        src="assets/flying-pig.png"
        alt="Flying pig illustration"
      />
    </section>
  );
}
