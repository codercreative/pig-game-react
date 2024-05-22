# Pig Game in React

## Table of contents

- [Overview](#overview)
  - [About the game](#about-the-game)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

Build a Pig Game in React.

### About the game

The Pig game is a simple dice game where players take turns rolling a single die as many times as they like, accumulating points for each roll. However, if a player rolls a 1, they lose all points accumulated in that turn and their turn ends. Players can choose to "hold" at any time to add their turn's points to their total score. The first player to reach a total score of 100 or more wins.

### Screenshot

![screenshot](./public/assets/start-page.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React

### What I learned

Remember to call the click event within the StartPage component:

```js
export default function StartPage({ onStartClick })
// ...
  <h2>Are you ready to roll?</h2>
      <p>Click Start Game to test your luck.</p>
      <button onClick={onStartClick}>Start Game</button>
```

And here's what it looks like in the App.jsx component:

```js
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

Remember to add a semi-colon after the quotation mark entity:

```js
<p>Click &#x0022;Start Game&#x0022; to test your luck.</p>
```

I really like this box-shadow code:

```css
box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
