import React from 'react'
import Skill from '../utility/Skill'
function Skillsection() {
  
  return (
    <div className='section__main' id='skills' >
    <h1 className='section__main__heading'>Skills</h1>
        <div className="skill__heading">
            <h2 style={{margin:"5rem 5rem 0rem 9rem"}}>Frontend Development</h2>
            <Skill  name="HTML"  percent= {70}/>
            <Skill name="CSS"  percent= {80}  />
            <Skill  name="JAVASCRIPT"  percent= {60} />
            <Skill name="REACTJS"  percent= {50} />
            <Skill name="REACTJS"  percent= {80} />
        </div>

        <div className="skill__heading">
        <h2 style={{margin:"5rem 5rem 0rem 9rem"}}>Backend Development</h2>
            <Skill  name="HTML"  percent= {70}/>
            <Skill name="CSS"  percent= {80}  />
            <Skill  name="JAVASCRIPT"  percent= {60} />
            <Skill name="REACTJS"  percent= {50} />
            <Skill name="REACTJS"  percent= {80} />
        </div>
       
    </div>
  )
}

export default Skillsection