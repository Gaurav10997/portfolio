
import React, { useEffect,useState } from 'react'
function NavScrollBar() {
    const [scrollPercentage ,setScrollPercentage] = useState(0)
    useEffect(() => {
        const list = window.addEventListener(("scroll"),()=>{
          const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
          setScrollPercentage(Math.floor((scrollTop/2984)*100))
        })
      
        return () => {
          window.removeEventListener("scroll",list);
        }
      }, [])

  return (
    <div className="navbarbar" style={{width:`${scrollPercentage}%`}}  ></div>
  )
}

export default NavScrollBar