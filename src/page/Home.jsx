import React, {useState, useEffect } from 'react'
import cv from "../assets/cv.pdf";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";


const Home = () => {
   
   const skills = ["MongoDB", "Express", "React", "Node"];
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
      

         <div className="navbar container">
      <div className="logo">FULL STACK DEVELOPER</div>

      <ul className="nav-links">
       <a href=""><li>Home</li></a>
        <a href=""><li>Projects</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>

      <button className="btn-outline">Hire Me</button>

    </div>
      <div className="line"></div>

    {/* _________________________ */}
     <div className="hero container fade-in">
      <div className="hero-left">
        <span className="badge">Full-Stack MERN Developer</span>

        <h1>
          Hi, I'm <span className="accent">Amal krishna m</span>
        </h1>

        <p>I build web apps using MongoDB, Express, React, and Node.</p>

        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <a href="/contact"><button className="btn-outline">Contact Me</button></a>
        </div>
      </div>

      
      <div className="hero-code typing-box">
        <pre>{displayedText}</pre>
        <span className="cursor">|</span>
      </div>
    </div>
    {/* __________________________________ */}
     <div className="section container">
      <h2>About Me</h2>

      <p className="muted">
        I have experience building full-stack web applications using the MERN
        stack.
      </p>

      <div className="features">
        <div>
          <h4>Clean Code</h4>
          <p>I write simple and readable code.</p>
        </div>

        <div>
          <h4>Fast Work</h4>
          <p>I complete tasks on time.</p>
        </div>
      </div>
    </div>
    {/* _____________________________________ skil*/}
       <div className="section container">
      <h2>My Skills</h2>

      <div className="grid">
        {skills.map((skill, i) => (
          <div key={i} className="card">
            <h3>{skill}</h3>
            <p>Basic knowledge of {skill}</p>
          </div>
        ))}
      </div>
    </div>
        {/* ______________________________proj */}

         <div className="section container">
      <h2>My Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>E-Commerce App</h3>
          <button className="btn-outline">View</button>
        </div>

        <div className="card">
          <h3>Task Manager</h3>
          <button className="btn-outline">View</button>
        </div>

        <div className="card">
          <h3>Social App</h3>
          <button className="btn-outline">View</button>
        </div>
      </div>
    </div>
  

    <div className="cta ">
      <div className="cta1">
          <h2>Contact Me</h2>
    
          <div className="hero-buttons">
            <button className="btn1">Send Message</button>
    <a href={cv} download>
      <button className="btn1">Download My CV</button>
    </a>
    </div>
          </div>
        </div>
        {/* ___________________________fot */}
        <footer className="footer">
              <div className="footer-container">
        
                {/* LEFT */}
                <div className="footer-col">
                  <h2 className="logo">MERN</h2>
                  <p>
                    Building robust full-stack applications with the MERN ecosystem.
                  </p>
                </div>
        
                {/* NAVIGATION */}
                <div className="footer-col">
                  <h4>Navigation</h4>
                  <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Projects</li></a>
                    <a href="/contact"><li>Contact</li></a>
                  </ul>
                </div>
        
                {/* CONNECT */}
                <div className="footer-col">
                  <h4>Connect</h4>
                  <div className="socials">
                    <FaGithub />
                    <FaLinkedin />
                    <FaTwitter />
                    <FaEnvelope />
                  </div>
                </div>
        
                {/* RESOURCES */}
                <div className="footer-col">
                  <h4>Resources</h4>
                <a href={cv} download>
                  <button className="btn-primary">Download My CV</button>
                </a>
                </div>
                
        
              </div>
        
              {/* BOTTOM */}
              <div className="footer-bottom">
                <p>© 2026 MERN. All rights reserved.</p>
              </div>
            </footer>

    </div>
  )
}

export default Home