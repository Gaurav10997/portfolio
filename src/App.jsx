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
import Detail from './components/contact/Detail';

import SaveAltIcon from '@mui/icons-material/SaveAlt';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import BounceLoader  from "react-spinners/BounceLoader"
import VisibilityIcon from '@mui/icons-material/Visibility';



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
    {/* <div className='sideBar__main'>
        { show && <Sidebar toggleShow={toggleShow} ></Sidebar>}
        { !show && <CloseButton toggleShow={toggleShow} />}
    </div> */}
    <div className='button__container'>
    <Button buttonName={"VIEW CV"} buttonColor={black} ButtonIcon={VisibilityIcon} buttonBackgroundColor={red} />
    <a href="mailto:avdhika@gmail.com"> <Button buttonName={"Contact Me"} buttonColor={red} ButtonIcon={QuestionAnswerIcon} buttonBackgroundColor={black} /></a>
   
</div>
</div>
<Projects></Projects>
<Certification />
<Skillsection />
{/* <Contact></Contact> */}

  {/* <Detail></Detail> */}


</>
    }
       
        </>
  )
}

export default App
