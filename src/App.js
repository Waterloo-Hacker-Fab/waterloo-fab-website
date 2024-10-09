import React from 'react';
import logo from './img/hacker_fab_logo.png';
import photo1 from './img/pattern1.jpg';
import photo2 from './img/pattern2.jpg';
import photo3 from './img/litho.jpg';
import './App.css';

function App() {
  return (
    <div className="main">
      <img src={logo} className="img" alt="logo" />
      <h1>Waterloo Hacker Fab</h1>
      <br />
      <h3>
        A low-cost open-source chip fab at the University of Waterloo. Part of{' '}
        <a href="http://www.hackerfab.org/" target="_blank" rel="noopener noreferrer" className="link">
          hackerfab.org
        </a>
      </h3>
      <br />
      <div className="checklist">
        <h4>Current Fab Capabilities</h4>
        <ul>
          <li>✅ Phase 1: Patterning and coating</li>
          <li>🔄 Phase 2: Deposition and annealing (in progress)</li>
          <li>⬜ Phase 3: Etching</li>
          <li>⬜ Phase 4: Validation</li>
        </ul>
        <a href="https://www.notion.so/tobiasgm/first-few-things-that-need-to-be-built-bffecb3723a54db7a25b8014129cc3ba" className="roadmap-link link" target='_blank'>
          Click here to see detailed overview of roadmap
        </a>
      </div>
      <br /><br />
      <h3 className="discord-heading">Interested?</h3>
      <a href="https://discord.gg/EwTR5PSfhs" className="discord-link link" target='_blank'>
        Join our Discord
      </a>
      <br /><br />
      <div>
        <h3>Photos</h3>
        <div className="image-grid">
          <img src={photo1} alt="Photo 1" />
          <img src={photo2} alt="Photo 2" />
          <img src={photo3} alt="Photo 3" />
        </div>
      </div>
    </div>
  );
}

export default App;