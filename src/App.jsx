import './App.css'

import { useState ,useEffect } from 'react'
import {color} from './components/utility/color';

import Home from './components/home/Home'
import CloseButton from './components/utility/CloseButton';
import Sidebar from './components/utility/Sidebar'
import Button from './components/utility/Button';
import Projects from './components/projects/Projects';
import Certification from './components/certification/Certification';
import Contact from './components/contact/Contact';
import Skillsection from './components/skills/Skillsection';

import SaveAltIcon from '@mui/icons-material/SaveAlt';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import BounceLoader  from "react-spinners/BounceLoader"

function App() {
  const {red,black} = color
  const [show, setshow] = useState(false)
  const [isLoading ,setIsLoading] = useState(true);
  const toggleShow =() => (setshow((prev)=>!prev))

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false)
      },2500)
  },[])


  return (
    <>
    {isLoading?
    <div className="loader">
            <BounceLoader color="#f65555" />
            <h2 >Loading...</h2>
    </div>
    
:<>
    <div>
    <Home></Home>
    <div className='sideBar__main'>
        { show && <Sidebar toggleShow={toggleShow} ></Sidebar>}
        { !show && <CloseButton toggleShow={toggleShow} />}
    </div>
    <div className='button__container'>
    <Button buttonName={"Download CV"} buttonColor={black} ButtonIcon={SaveAltIcon} buttonBackgroundColor={red} />
    <Button buttonName={"Contact Me"} buttonColor={red} ButtonIcon={QuestionAnswerIcon} buttonBackgroundColor={black} />
</div>
</div>
<Projects></Projects>
<Certification />
<Skillsection />
<Contact></Contact>
</>
    }
       
        </>
  )
}

export default App
