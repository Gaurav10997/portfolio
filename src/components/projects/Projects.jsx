import React from 'react'
import Project from './Project'
import "./projects.css"
function Projects() {
  return (
        <div className="projects__main">
            <br />
            <h1 className='project__main__heading'>Projects</h1>
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