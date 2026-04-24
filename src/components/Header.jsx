import React from 'react'

const Header = () => {
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
    </div>
  )
}

export default Header