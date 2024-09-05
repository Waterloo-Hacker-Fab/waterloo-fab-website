import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import logo from './img/hacker_fab_logo.png';
import photo1 from './img/pattern1.jpg';
import photo2 from './img/pattern2.jpg';
import photo3 from './img/litho.jpg';
import './App.css';

function App() {
  const [showH3, setShowH3] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showDiscordHeading, setShowDiscordHeading] = useState(false);
  const [showDiscordText, setShowDiscordText] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    const h3Timer = setTimeout(() => setShowH3(true), 1500);
    return () => clearTimeout(h3Timer);
  }, []);

  useEffect(() => {
    if (showH3) {
      const checklistTimer = setTimeout(() => setShowChecklist(true), 5000);
      return () => clearTimeout(checklistTimer);
    }
  }, [showH3]);

  useEffect(() => {
    if (showChecklist) {
      const discordHeadingTimer = setTimeout(() => setShowDiscordHeading(true), 3000);
      return () => clearTimeout(discordHeadingTimer);
    }
  }, [showChecklist]);

  useEffect(() => {
    if (showDiscordHeading) {
      const discordTextTimer = setTimeout(() => setShowDiscordText(true), 1000);
      return () => clearTimeout(discordTextTimer);
    }
  }, [showDiscordHeading]);

  useEffect(() => {
    if (showDiscordText) {
      const photosTimer = setTimeout(() => setShowPhotos(true), 2000);
      return () => clearTimeout(photosTimer);
    }
  }, [showDiscordText]);

  return (
    <div className="main">
      <img src={logo} className="img" alt="logo" />
      <h1>
        <Typewriter words={['Waterloo Hacker Fab']} loop={1} typeSpeed={50} cursor={false} />
      </h1>
      <br/>
      {showH3 && (
        <h3>
          <Typewriter words={[
            'The Waterloo Hacker Fab is a student design team at the University of Waterloo building the tools and processes to manufacture NMOSFET transistors.',
          ]} loop={1} typeSpeed={30} cursor={false} />
        </h3>
      )}
      <br/>
      {showChecklist && (
        <div className="checklist">
          <h4>
            <Typewriter words={['Current Fab Capabilities']} loop={1} typeSpeed={40} cursor={false} />
          </h4>
          <ul>
            <li><Typewriter words={['✅ Phase 1: Patterning and coating']} loop={1} typeSpeed={40} cursor={false} /></li>
            <li><Typewriter words={['🔄 Phase 2: Deposition and annealing (in progress)']} loop={1} typeSpeed={40} cursor={false} /></li>
            <li><Typewriter words={['⬜ Phase 3: Etching']} loop={1} typeSpeed={40} cursor={false} /></li>
            <li><Typewriter words={['⬜ Phase 4: Validation']} loop={1} typeSpeed={40} cursor={false} /></li>
          </ul>
          <a href="#" className="roadmap-link link">
            <Typewriter words={['Click here to see detailed overview of roadmap']} loop={1} typeSpeed={40} cursor={false} />
          </a>
        </div>
      )}
      <br/>
      <br/>
      {showDiscordHeading && (
        <h3 className="discord-heading">
          <Typewriter words={['Interested?']} loop={1} typeSpeed={40} cursor={false} />
        </h3>
      )}
      {showDiscordText && (
        <a href="https://discord.gg/yourdiscordlink" className="discord-link link">
          <Typewriter words={['Join our Discord']} loop={1} typeSpeed={40} cursor={false} />
        </a>
      )}
      <br/>
      <br/>
      {showPhotos && (
        <div>
          <h3>
            <Typewriter words={['Photos']} loop={1} typeSpeed={40} cursor={false} />
          </h3>
          <div className="image-grid">
            <img src={photo1} alt="Photo 1" />
            <img src={photo2} alt="Photo 2" />
            <img src={photo3} alt="Photo 3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
