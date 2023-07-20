import './App.css'
import Home from './components/home/Home'
import { useState } from 'react'
import CloseButton from './components/utility/CloseButton';
import Sidebar from './components/utility/Sidebar'
import Button from './components/utility/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import Projects from './components/projects/Projects';
function App() {
  const [show, setshow] = useState(false)
  const style = getComputedStyle(document.body)

  const toggleShow =() => (setshow((prev)=>!prev))
  return (
    <>
    <div>
    <Home></Home>
    <div className='sideBar__main'>
   { show && <Sidebar toggleShow={toggleShow} ></Sidebar>}
   { !show && <CloseButton toggleShow={toggleShow} />}
    </div>
    <div className='button__container'>
    <Button buttonName={"Download CV"} buttonColor={style.getPropertyValue('--bg-color')} ButtonIcon={SaveAltIcon} buttonBackgroundColor={style.getPropertyValue('--red-color')} />
    <Button buttonName={"Contact Me"} buttonColor={style.getPropertyValue('--red-color')} ButtonIcon={QuestionAnswerIcon} buttonBackgroundColor={style.getPropertyValue('--bg-color')} />
    </div>
    
    </div>
    <Projects></Projects>
    </>
  )
}

export default App
