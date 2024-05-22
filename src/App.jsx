import React, { useState } from "react";
import Game from "./components/Game.jsx";
import StartPage from "./components/StartPage.jsx";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartClick = () => {
    setGameStarted(true);
  };

  return (
    <>
      {gameStarted ? <Game /> : <StartPage onStartClick={handleStartClick} />}
    </>
  );
}
