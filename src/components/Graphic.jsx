import { useState, useEffect } from "react";

export default function Graphic({ wrongGuess }) {
  const [imgSrc, setImgSrc] = useState("../img/Hangman0.jpg");

  useEffect(() => {
    const imageNumber = wrongGuess.length;
    if (imageNumber < 7) {
      setImgSrc(`../img/Hangman${imageNumber}.jpg`);
    }
  }, [wrongGuess]);

  return <img src={imgSrc} width="500px" />;
}
