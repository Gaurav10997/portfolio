import React from 'react'
import "./SideBar.css"
function Skill({name,  percent}) {
  return (
    <div className="skill__main">
      <div>{name}</div>
      <div className="skill__box">
        <div className="skill__level" style={{width:`${percent}%`}} >
        </div>
      </div>
    </div>
   
  )
}

export default Skill