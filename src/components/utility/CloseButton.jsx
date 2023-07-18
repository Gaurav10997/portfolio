import React from 'react'
import "./SideBar.css"
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
function CloseButton({toggleShow}) {
  return (
     <div className='close__button' onClick={toggleShow}>
        <PlayArrowSharpIcon fontSize='large'  />
     </div>
  )
}

export default CloseButton