import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import cooking from './img/hacker_fab_logo.png';
import './App.css';

function App() {
  const [showH3, setShowH3] = useState(false);
  const [showP, setShowP] = useState(false);
  const [h1Typed, setH1Typed] = useState(false);
  const [h3Typed, setH3Typed] = useState(false);
  const [pTyped, setPTyped] = useState(false);

  useEffect(() => {
    // Delay for showing h3 after h1 finishes
    const h3Timer = setTimeout(() => setShowH3(true), 1700); 
    return () => clearTimeout(h3Timer);
  }, []);

  useEffect(() => {
    if (showH3) {
      // Delay for showing p after h3 finishes
      const pTimer = setTimeout(() => setShowP(true), 2800); 
      return () => clearTimeout(pTimer);
    }
  }, [showH3]);

  return (
    <div className="main">
      <img src={cooking} className="img" alt="logo" />
      <h1>
        <Typewriter
          words={['Waterloo Hacker Fab']}
          loop={1}
          typeSpeed={50}
          cursor={!h1Typed}
          cursorStyle='_'
          onType={() => setH1Typed(true)}
        />
      </h1>
      {showH3 && (
        <h3>
          <Typewriter
            words={["🚧 We're currently under construction 🚧"]}
            loop={1}
            typeSpeed={50}
            cursor={!h3Typed}
            cursorStyle='_'
            onType={() => setH3Typed(true)}
          />
        </h3>
      )}
      {showP && (
        <p>
          <Typewriter
            words={['Please check back soon for updates!']}
            loop={1}
            typeSpeed={40}
            cursor={!pTyped}
            cursorStyle='_'
            onType={() => setPTyped(true)}
          />
        </p>
      )}
    </div>
  );
}

export default App;