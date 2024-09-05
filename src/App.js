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
    // Delay for showing h3 after h1 finishes
    const h3Timer = setTimeout(() => setShowH3(true), 1500);
    return () => clearTimeout(h3Timer);
  }, []);

  useEffect(() => {
    // Use a hardcoded delay for showing the checklist after the h3 finishes typing
    if (showH3) {
      const checklistTimer = setTimeout(() => {
        setShowChecklist(true);
      }, 4000); // Adjust delay based on the typing speed and length of h3 text
      return () => clearTimeout(checklistTimer);
    }
  }, [showH3]);

  useEffect(() => {
    // Show the Discord heading after the checklist finishes typing
    if (showChecklist) {
      const discordHeadingTimer = setTimeout(() => {
        setShowDiscordHeading(true);
      }, 3000); // Adjust delay to show Discord heading after checklist finishes typing
      return () => clearTimeout(discordHeadingTimer);
    }
  }, [showChecklist]);

  useEffect(() => {
    // Show the Discord text after the heading finishes typing
    if (showDiscordHeading) {
      const discordTextTimer = setTimeout(() => {
        setShowDiscordText(true);
      }, 1000); // Adjust delay to show Discord text after heading finishes typing
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
      {showH3 && (
        <h3>
          <Typewriter
            words={[
              'The Waterloo Hacker Fab is a student design team at the University of Waterloo building the tools and processes to manufacture NMOSFET transistors.',
            ]}
            loop={1}
            typeSpeed={30} // Faster typing speed for h3
            cursor={false}
          />
        </h3>
      )}
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
          <br />
          <br />
          {showDiscordHeading && (
            <h3>
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
                words={['Join our Discord to learn how you can support.']}
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
