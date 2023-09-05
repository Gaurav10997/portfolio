import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Techname from '../utility/Techname';
import  "./Projectcomonent.css"
function Project({title,images,github,url,description,techStackUsed}) {
  return (
    <>
    <div className="projects__main">
       <div className="projects__main__upper">
       <h1>{title}</h1>
        <div className="techstacks">
          {
            techStackUsed.map((el,index)=>{
              return(
                <Techname  name={el} key = {index}/>
              )
            })
          }
        </div>
        <p>{description}</p>
       </div>
       <div className="projects__main__lower">
        <div className="projects__main__lower__icons">
           <a href={github} >
            <GitHubIcon />
           </a>
           <a href={url} target='_blank' rel="noreferrer">
             <OpenInNewIcon />
           </a>
        </div>
        <p>In Progress</p>
        
       </div>
       

       
    </div>
    </>

  )
}

export default Project