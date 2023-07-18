import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import "./sideBar.css"
function Sidebar({toggleShow}) {
  const navigations = ["Summary", "Projects" ,"Mini Projects","Skills","Education","Certification","Get In Touch","Contact Details" ]
  return (
    <div className='sidebar'>
        <div className='sidebar__menu'>
            <h3 className='sidebar__heading'>SKIP TO THE SECTION</h3>
            <PlayArrowSharpIcon fontSize='small'  onClick={toggleShow}/> 
        </div>
        <ul className="nav">
            {navigations.map((navigation,index)=><li key={index}>{navigation}</li>)}
        </ul>
        <hr />
        <div className="sociallinks">
        <MailOutlineIcon  />
        <LinkedInIcon />
        <GitHubIcon />
        <ChatBubbleOutlineSharpIcon />
        </div>

    </div>
  )
}

export default Sidebar