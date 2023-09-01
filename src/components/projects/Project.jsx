import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Techname from '../utility/Techname';
import  "./Projects.css"
function Project() {
  return (
    <>
    <div className="project__main" id="projects">
            <img className="left__side" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680501755888/e5a6ba25-7877-4a85-98ee-fcd0bfaacf31.png" alt="" width={350} />
        <div className="right___side">
            <h2 className="heading">E-commerce app</h2>
            <div className="skills">
            <Techname />
            <Techname />
            <Techname />
            <Techname />
            <Techname />
            </div>
            <p className="projectdescription"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae consequuntur culpa exercitationem voluptate, at dolore quaerat distinctio est vitae earum deserunt odio quam facilis!</p>
            <div className="projects__links">
            <GitHubIcon />
            <OpenInNewIcon />
            </div>
        </div>
    </div>
    </>

  )
}

export default Project