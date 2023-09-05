import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';

import "./Contact.css"
function Detail() {
  return (
    <div className=" section__main projects__Section__main">
      <br />
      <h1 className='section__main__heading '>Contact Details</h1>
      <br />


      <h2 style={{textAlign:"center"}} >Feel free to contact me through the following platforms. Also, please check out my work on  GitHub.</h2>
      <div className="socials__links">
            <EmailIcon fontSize='large'></EmailIcon>
            <LinkedInIcon fontSize='large'></LinkedInIcon>
            <GitHubIcon fontSize='large'></GitHubIcon>
            <MessageIcon fontSize='large'></MessageIcon>
      </div>
    </div>
  )
}

export default Detail