import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import cooking from './img/hacker_fab_logo.png';
import './App.css';

function App() {
  const [showH3, setShowH3] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showDiscordHeading, setShowDiscordHeading] = useState(false);
  const [showDiscordText, setShowDiscordText] = useState(false);

  useEffect(() => {
    // Delay for showing h3 shortly after h1 starts typing
    const h3Timer = setTimeout(() => setShowH3(true), 1500); // Reduced delay
    return () => clearTimeout(h3Timer);
  }, []);

  useEffect(() => {
    // Start showing the checklist before h3 finishes typing
    if (showH3) {
      const checklistTimer = setTimeout(() => setShowChecklist(true), 5000); // Reduced delay
      return () => clearTimeout(checklistTimer);
    }
  }, [showH3]);

  useEffect(() => {
    // Show the Discord heading shortly before checklist finishes typing
    if (showChecklist) {
      const discordHeadingTimer = setTimeout(() => setShowDiscordHeading(true), 3500); // Reduced delay
      return () => clearTimeout(discordHeadingTimer);
    }
  }, [showChecklist]);

  useEffect(() => {
    // Show the Discord text shortly after the heading starts typing
    if (showDiscordHeading) {
      const discordTextTimer = setTimeout(() => setShowDiscordText(true), 750); // Reduced delay
      return () => clearTimeout(discordTextTimer);
    }
  }, [showDiscordHeading]);

  return (
    <div className="main">
      <img src={cooking} className="img" alt="logo" />
      <h1>
        <Typewriter
          words={['Waterloo Hacker Fab']}
          loop={1}
          typeSpeed={50}
          cursor={false}
        />
      </h1>
      <br/>
      {showH3 && (
        <h3>
          <Typewriter
            words={[
              'The Waterloo Hacker Fab is a student design team at the University of Waterloo building the tools and processes to manufacture NMOSFET transistors.',
            ]}
            loop={1}
            typeSpeed={30} // Typing speed for h3
            cursor={false}
          />
        </h3>
      )}
      <br/>
      {showChecklist && (
        <div className="checklist">
          <h4>
            <Typewriter
              words={['Current Fab Capabilities']}
              loop={1}
              typeSpeed={40} // Typing speed for heading
              cursor={false}
            />
          </h4>
          <ul>
            <li>
              <Typewriter
                words={['✅ Phase 1: Patterning and coating']}
                loop={1}
                typeSpeed={40} // Typing speed for checklist items
                cursor={false}
              />
            </li>
            <li>
              <Typewriter
                words={['🔄 Phase 2: Deposition and annealing (in progress)']}
                loop={1}
                typeSpeed={40} // Typing speed for checklist items
                cursor={false}
                delaySpeed={500}
              />
            </li>
            <li>
              <Typewriter
                words={['⬜ Phase 3: Etching']}
                loop={1}
                typeSpeed={40} // Typing speed for checklist items
                cursor={false}
                delaySpeed={1000}
              />
            </li>
            <li>
              <Typewriter
                words={['⬜ Phase 4: Validation']}
                loop={1}
                typeSpeed={40} // Typing speed for checklist items
                cursor={false}
                delaySpeed={1500}
              />
            </li>
          </ul>
          <a href="#" className="roadmap-link link">
            <Typewriter
              words={['Click here to see detailed overview of roadmap']}
              loop={1}
              typeSpeed={40} // Typing effect for link text
              cursor={false}
              delaySpeed={1500}
            />
          </a>
          <br/>
          <br/>
          <br/>
          {showDiscordHeading && (
            <h3 className="discord-heading">
              <Typewriter
                words={['Interested?']}
                loop={1}
                typeSpeed={40} // Typing speed for Discord heading
                cursor={false}
              />
            </h3>
          )}
          {showDiscordText && (
            <a
              href="https://discord.gg/yourdiscordlink"
              className="discord-link link"
            >
              <Typewriter
                words={['Join our Discord']}
                loop={1}
                typeSpeed={40} // Typing speed for the full Discord message
                cursor={false}
                delaySpeed={300}
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
