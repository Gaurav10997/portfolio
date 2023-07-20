import React from 'react'

function Techname({name}) {
    const style = getComputedStyle(document.body)
    const styles = {
        backgroundColor:style.getPropertyValue('--red-color') ,
        color:style.getPropertyValue('--bg-color')  ,
        borderRadius:"5px",
    }
    
  return (
    <div style={styles}>
      <h4 className='techname'>Name</h4>
    </div>
  )
}

export default Techname