import React from 'react'
import "./Contact.css"
import MessageIcon from '@mui/icons-material/Message';
import Button from '../utility/Button';
import { color  } from '../utility/color';
function Contact() {
  const {red,black} = color
  return (
    <>
    <div className="section__main" id='getInTouch' >
      <div className="section__inner__main">
      <h1 className='section__main__heading'>GET IN TOUCH</h1>
      <p className='section__main__paragraph'>Reach out to me today and let start a conversation about your project or inquiry!

    </p>
      <form className='form__details' >
          <input type="text" name='username form__details__child' placeholder='John Doe' />
          <input type="text" name="email form__details__child " placeholder='Johndoe@gmail.com'/>
          <textarea name="description form__details__child" id="" cols="60" rows="5" className='textarea__description' draggable="false" 
          placeholder='Tell Me about Your projects Needs and TimeLine'
          ></textarea>
         <Button className="submitbutton" buttonName={"Send"} ButtonIcon={MessageIcon} buttonColor={black} buttonBackgroundColor={red}  ></Button>
      </form>

      </div>
      
    </div>
    </>
  )
}
export default Contact