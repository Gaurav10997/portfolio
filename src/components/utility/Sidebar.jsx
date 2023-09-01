
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import "./Sidebar.css"
function Sidebar({toggleShow}) {
  const navigations = ["summary", "projects" ,"skills","certification","getInTouch" ]
  return (
    <div className='sidebar'>
        <div className='sidebar__menu'>
            <h3 className='sidebar__heading'>SKIP TO THE SECTION</h3>
            <PlayArrowSharpIcon fontSize='small'  onClick={toggleShow}/> 
        </div>
        <ul className="nav">
            {navigations.map((navigation,index)=><a className="navigation__links" key={index} href={`#${navigation}`}>{navigation}</a>)}
        </ul>
        <hr />
        <div className="sociallinks">
          <a href=""><MailOutlineIcon  /></a>
        <LinkedInIcon />
        <GitHubIcon />
        <ChatBubbleOutlineSharpIcon />
        </div>

    </div>
  )
}

export default Sidebar