import React from 'react'

function Button({buttonName, buttonColor , ButtonIcon,buttonBackgroundColor}) {
    // console.log(buttonIcon)
  return (
    <div className='button' style={{color:`${buttonColor}` , backgroundColor:`${buttonBackgroundColor}`}} >
        <h4>{buttonName}</h4>
        <ButtonIcon />
    </div>
  )
}

export default Button