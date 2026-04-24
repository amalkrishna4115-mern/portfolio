import React from 'react'
import cv from "../assets/cv.pdf";
const ContactSection = () => {
  return (
    <div>
         <div className="cta container">
      <h2>Contact Me</h2>

      <div className="hero-buttons">
        <button className="btn-primary">Send Message</button>
<a href={cv} download>
  <button className="btn-primary">Download My CV</button>
</a>
      </div>
    </div>
    
    </div>
  )
}

export default ContactSection