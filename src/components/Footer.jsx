import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import cv from "../assets/cv.pdf";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h2 className="logo">MERNfolio</h2>
          <p>
            Building robust full-stack applications with the MERN ecosystem.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
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
        <p>© 2026 MERNfolio. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer