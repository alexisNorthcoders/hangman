import Graphic from "./Graphic";
import WordDisplay from "./Word-display";

export default function Display({
  input,
  wrongGuess,
  setWrongGuess,
  setisWinner,
}) {
  return (
    <>
      <Graphic wrongGuess={wrongGuess} />
      <WordDisplay
        
        setisWinner={setisWinner}
        wrongGuess={wrongGuess}
        setWrongGuess={setWrongGuess}
        input={input}
      />
    </>
  );
}
