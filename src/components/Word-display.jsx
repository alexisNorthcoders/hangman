import { useState, useEffect } from "react";
import { words } from "../assets/words.json";

const hangmanWord = words[Math.floor(Math.random() * words.length)];
const hangmanSplit = hangmanWord.split("");

export default function WordDisplay({ input, setWrongGuess, setisWinner }) {
  const [guess, setGuess] = useState("");

  useEffect(() => {
    if (!hangmanWord.includes(input)) {
      setWrongGuess((prevWrongGuess) => [...prevWrongGuess, input]);
    }
    setGuess((prevGuess) => prevGuess + input);
  }, [input]);

  useEffect(() => {
    const hiddenWord = hangmanSplit
      .map((letter) => (guess.includes(letter) ? letter : "_"))
      .join("");
    if (hiddenWord === hangmanWord) {
      setisWinner(true);
    }
  }, [guess]);

  const hiddenWord = hangmanSplit
    .map((letter) => (guess.includes(letter) ? letter : "_"))
    .join("");

  return <h2 id="word">{hiddenWord}</h2>;
}
