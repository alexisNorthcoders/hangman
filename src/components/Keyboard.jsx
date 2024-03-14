import React, { useState } from "react";

export default function Keyboard({ setKey }) {
  const [clickedButtons, setClickedButtons] = useState([]);

  const letters = "qwertyuiopasdfghjklzxcvbnm";
  const lettersArray = letters.split("");

  function handleClick(event) {
    setKey(event.target.id.toUpperCase());
    setClickedButtons((prevState) => [...prevState, event.target.id]);
  }

  return (
    <div id="keyboard">
      {lettersArray.map((letter) => {
        return (
          <button
            key={letter}
            id={letter}
            onClick={handleClick}
            disabled={clickedButtons.includes(letter)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
