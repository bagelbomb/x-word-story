import { useState, useRef } from 'react';
import words from './words.json';
import './App.css';

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function App() {
  const [storyText, setStoryText] = useState('');
  const [storyList, setStoryList] = useState([]);
  const inputRef = useRef();

  const handleStartStory = () => {
    setStoryText(capitalize(getRandomWord()));
    inputRef.current.focus();
  };

  const handleTextChange = e => {
    setStoryText(e.target.value);
  };

  const handleEnter = () => {
    const lastLetter = storyText[storyText.length - 1];

    if ('.!?'.includes(lastLetter)) {
      setStoryList(prev => [...prev, storyText]);
      setStoryText('');
    } else {
      setStoryText(
        prev => prev + (lastLetter === ' ' ? '' : ' ') + getRandomWord()
      );
    }

    inputRef.current.focus();
  };

  return (
    <div className='app'>
      <h1 className='app-title'>X Word Story</h1>
      <div className='instructions'>
        <p>Write a single-sentence story with me, word by word!</p>
        <p>You can start the story or have me start it.</p>
        <p>Press Enter/Return after entering a word.</p>
        <p>
          End the story with a period (.), exclamation point (!), or question
          mark (?).
        </p>
      </div>
      <div className='story-input-div'>
        <button className='start-button' onClick={handleStartStory}>
          Start Story
        </button>
        <input
          className='story-input'
          type='text'
          ref={inputRef}
          value={storyText}
          onChange={handleTextChange}
          onKeyDown={e => e.key === 'Enter' && handleEnter()}
        />
        <button className='enter-button' onClick={handleEnter}>
          &#8658;
        </button>
      </div>
      <h2 className='stories-title'>Stories</h2>
      <div className='stories-div'>
        {storyList.map(
          (
            s // TODO: add keys
          ) => (
            <p>{s}</p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
