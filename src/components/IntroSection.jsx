import React, {useState, useEffect } from 'react'

const IntroSection = () => {
  
  const codeLines = [
    'const developer = {',
    '  name: "Amal krishna",',
    '  stack: ["Mongo", "Express", "React", "Node"],',
    '  mission: "Build better web"',
    '};'
  ];

  const [displayedText, setDisplayedText] = useState("");


useEffect(() => {
  let i = 0;
  let fullText = codeLines.join("\n");

  let interval;

  const startTyping = () => {
    i = 0;
    setDisplayedText("");

    interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);

     
        setTimeout(() => {
          startTyping();
        }, 2000);
      }
    }, 30);
  };

  startTyping();

  return () => clearInterval(interval);
}, []);



  return (
    <div>
         <div className="hero container fade-in">
      <div className="hero-left">
        <span className="badge">Full-Stack MERN Developer</span>

        <h1>
          Hi, I'm <span className="accent">Amal krishna m</span>
        </h1>

        <p>I build web apps using MongoDB, Express, React, and Node.</p>

        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-outline"><a href="/contact">Contact Me</a></button>
        </div>
      </div>

      
      <div className="hero-code typing-box">
        <pre>{displayedText}</pre>
        <span className="cursor">|</span>
      </div>
    </div>
    </div>
  )
}

export default IntroSection