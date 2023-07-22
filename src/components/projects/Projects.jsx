import React from 'react'
import Project from './Project'
import "./projects.css"
function Projects() {
  return (
        <div className="section__main">
            <br />
            <h1 className='section__main__heading'>Projects</h1>
            <br />
            <div className="projects">
            <Project />
            <Project />
            <Project /> 
            </div>
        </div>

  )
}

export default Projects