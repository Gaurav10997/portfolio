import React from 'react'
import "./Contact.css"
import Button from "./../utility/Button"
import MessageIcon from '@mui/icons-material/Message';
function Contact() {
  const style = getComputedStyle(document.body);
  console.log()
  return (
    <>
    <div className="section__main">
      <div className="section__inner__main">
      <h1 className='section__main__heading'>GET IN TOUCH</h1>
      <p className='section__main__paragraph'>Reach out to me today and let's start a conversation about your project or inquiry!

    </p>
      <form className='form__details' >
          <input type="text" name='username form__details__child' placeholder='John Doe' />
          <input type="text" name="email form__details__child " placeholder='Johndoe@gmail.com'/>
          <textarea name="description form__details__child" id="" cols="60" rows="5" className='textarea__description' draggable="false" 
          placeholder='Tell Me about Your projects Needs and TimeLine'
          ></textarea>
         <Button className="submitbutton"  buttonName={"Send"} ButtonIcon={MessageIcon} buttonColor={style.getPropertyValue('--bg-color')} buttonBackgroundColor={style.getPropertyValue('--red-color')}  ></Button>
      </form>

      </div>
      
    </div>
    </>
  )
}
export default Contact