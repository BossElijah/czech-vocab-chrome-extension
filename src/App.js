import { useState } from 'react';
import './App.css';
import { Vocab } from './vocabList';

const App = () => {
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * Math.floor(Vocab.length))
  );
  return (
    <>
      <h1>{Vocab[randomNum].definition}</h1>
      <h3>{Vocab[randomNum].word}</h3>
      <button
        onClick={() =>
          setRandomNum(Math.floor(Math.random() * Math.floor(Vocab.length)))
        }
      >
        Get new word
      </button>
    </>
  );
};

export default App;
