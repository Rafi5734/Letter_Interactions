import { useCallback, useState } from 'react'
import './App.css'
import { replaceConsecutiveLetters } from './utils/LetterUtils';

function App() {
  
  const [outputString, setOutputString] = useState("");

  const handleTileClick = useCallback(
    (letter) => {
      const newString = outputString + letter;
      const updatedString = replaceConsecutiveLetters(newString);
      setOutputString(updatedString);
    },
    [outputString]
  );

  const renderTiles = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return alphabet.map((letter) => (
      <button
        key={letter}
        onClick={() => handleTileClick(letter)}
        className="tile"
      >
        {letter}
      </button>
    ));
  };

  return (
    <div className="main_container">
      <h1>Alphabet Tile Interaction</h1>
      <div className="tile-grid">{renderTiles()}</div>
      <div id="outputString">
        <h2>Output: {outputString || "Empty"}</h2>
      </div>
    </div>
  );
}

export default App
