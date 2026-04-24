import React from 'react'

const SkillsSection = () => {

    const skills = ["MongoDB", "Express", "React", "Node"];

  return (
    <div>
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
    </div>
  )
}

export default SkillsSection