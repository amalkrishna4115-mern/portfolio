import React from 'react'
import Footer from '../components/Footer'
import cv from "../assets/cv.pdf";
import { Link } from 'react-router-dom';


// import cv from "../assets/cv.pdf";
const Contact = () => {
  return (
         <div className="page">
      {/* HERO */}
      <div className="top-section">
        <h1>
          Let’s Create <span className="highlight">Something Great</span>
        </h1>
        <p className="top-text">
          Whether you have a project or just want to say hi, my inbox is open.
        </p>
        <Link to="/">Home</Link>

      </div>

      <div className="main-box">
       
        <div className="left-box">
          <h2>Get in Touch</h2>
          <p>
            I’m open to new projects, ideas, and opportunities. Let’s build
            something together.
          </p>

          <div className="info">
            <p><b>Email:</b>amalkrishna4115@gmail.com</p>
            <p><b>Location:</b> KANNUR</p>

              <a href={cv} download>
                    <button className="btn-primary">Download My CV</button>
                  </a>
          </div>
          
          
        </div>

       
        <div className="right-box">
          <div className="input-row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button className="btn send">Send Message</button>
        </div>
      </div>

      {/* CARDS */}
      <div className="card-box">
        <div className="card">
          <h3>Open Source</h3>
         <a href="https://github.com/amalkrishna4115-mern"><p>See my GitHub projects.</p></a> 
        </div>

        <div className="card">
          <h3>LinkedIn</h3>
         <a href=""><p>Connect with me.</p></a> 
        </div>

        <div className="card">
  <h3>Email</h3>
  <p>
    <a
      href="mailto:amalkrishna4115@gmail.com?subject=job Inquiry&body=Hi, I want to contact you."
      className="email-link"
    >
      Send direct message
    </a>
  </p>
</div>
      </div>

     
      <Footer/>

    </div>
    
  )
}

export default Contact