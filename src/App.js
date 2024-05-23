import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import cooking from './img/hacker_fab_logo.png';
import './App.css';

function App() {
  const [showH3, setShowH3] = useState(false);
  const [showP, setShowP] = useState(false);

  useEffect(() => {
    // Delay for showing h3 after h1 finishes
    const h3Timer = setTimeout(() => setShowH3(true), 2000); // Adjust timing as needed
    return () => clearTimeout(h3Timer);
  }, []);

  useEffect(() => {
    if (showH3) {
      // Delay for showing p after h3 finishes
      const pTimer = setTimeout(() => setShowP(true), 3000); // Adjust timing as needed
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
          cursor
          cursorStyle='_'
        />
      </h1>
      {showH3 && (
        <h3>
          <Typewriter
            words={["We're currently under construction 🚧"]}
            loop={1}
            typeSpeed={50}
            cursor
            cursorStyle='_'
          />
        </h3>
      )}
      {showP && (
        <p>
          <Typewriter
            words={['Please check back soon for updates!']}
            loop={1}
            typeSpeed={50}
            cursor
            cursorStyle='_'
          />
        </p>
      )}
    </div>
  );
}

export default App;