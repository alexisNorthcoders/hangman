import { useState } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

export default function Manager() {
  const [input, setKey] = useState("");
  const [wrongGuess, setWrongGuess] = useState([]);
  const [isWinner, setisWinner] = useState(false);
  return (
    <section>
      <Display
        setisWinner={setisWinner}
        wrongGuess={wrongGuess}
        setWrongGuess={setWrongGuess}
        input={input}
      />
      <h2 id="gameover">{wrongGuess.length > 5 ? "GAME OVER" : null}</h2>
      <h2 id="winner">{isWinner ? "YOU WIN" : null}</h2>
      {!isWinner && wrongGuess.length < 6 ? <Keyboard setKey={setKey} /> : null}
    </section>
  );
}
