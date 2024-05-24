# Pig Game in React

## Table of contents

- [Overview](#overview)
  - [About the game](#about-the-game)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned and reminders](#what-i-learned-and-reminders)
    - [Start component](#start-component)
    - [Game component](#game-component)
  - [Enhancement considerations](#enhancement-considerations)

## Overview

Build a Pig Game in React.

### About the game

The Pig game is a simple dice game where players take turns rolling a single die as many times as they like, accumulating points for each roll. However, if a player rolls a 1, they lose all points accumulated in that turn and their turn ends. Players can choose to "hold" at any time to add their turn's points to their total score. The first player to reach a total score of a 20 or more wins.

### Screenshot

![screenshot](./public/assets/start-page.png)
![screenshot](./public/assets/game-page.png)

## My process

### Built with

- CSS
- Flexbox
- JSX
- React

### What I learned and reminders

#### Start component

Remember to call the click event within the StartPage component:

```jsx
export default function StartPage({ onStartClick })
// ...
  <h2>Are you ready to roll?</h2>
      <p>Click Start Game to test your luck.</p>
      <button onClick={onStartClick}>Start Game</button>
```

And here's what it looks like in the App.jsx component:

```jsx
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
```

#### Game component

useEffect is a hook in React that allows you to perform side effects in function components. Side effects are actions that occur outside the primary flow of the application, such as data fetching, DOM manipulation, or setting timers.

I used useEffect to ensure that the setTimeout is only called once after the component mounts, and is properly cleaned up when the component unmounts or when the dependencies change. If I use setTimeout directly in the functional component body, it might cause unexpected behavior because setTimeout will be re-executed on each render.

Arrow function that generates a dice roll when called. It updates the Dice Roll state with a randomRoll. It makes the dice visible and it updates the current player's points. Also, within this function, it is important to include what happens when the current player rolls a 1.

```jsx
const rollDice = () => {
  if (winner) return;

  const randomRoll = Math.floor(Math.random() * 6) + 1;
  setDiceRoll(randomRoll);
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
```

The page initially renders with the die hidden from view. The die does not appear until the current player clicks on the "Roll Dice" button.

```jsx
<div className="player-btn-container">
  <button className="reset-btn" onClick={resetGame}>
    Reset Game
  </button>

  <img
    className={`die ${diceRoll ? "" : "hidden"}`}
    src={`assets/dice-${diceRoll}.png`}
    alt="Playing dice"
  />

```

I used `object-fit: contain;` to make sure that the die did not make the interface shift when it appears when the current player starts the game by rolling the die:

```css
.die {
  margin: 0 auto;
  height: 90px;
  width: 90px;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
  object-fit: contain;
}
```

I really like this box-shadow code:

```css
box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
```

Making the start game button pulse a little bit with the help of CSS:

```css
.start-game-btn {
  margin: 2em auto;
  display: block;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;
  background-color: #ff0e7c;
  padding: 1em 1.8em;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}
```

Used this code snippet for better contrast:

```css
h1,
h2,
h3,
p {
  filter: contrast(110%);
}
```

### Enhancement considerations

Place buttons below the player sections on smaller screens to make the layout more accessible.
