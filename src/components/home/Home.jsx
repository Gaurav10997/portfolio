import React, { useEffect,useState } from 'react'
import NavScrollBar from './NavScrollBar'
import "./Home.css"
function Home() {

  useEffect(()=>{
    const temp = window.addEventListener(("scroll"),()=>{
      const navbar = document.querySelector("nav")
      navbar.classList.toggle("navbar__main__sticky" , window.scrollY>0)
    })
  
  })

  return (
    <>
    <NavScrollBar></NavScrollBar>
    <nav className='navbar__main' >
        
        <div>
          <h1 className='name'>GauravMandal<span>.</span></h1>
        </div>
          <ul className="navbar">
              <li><a href="#about-me" >Home</a></li>
              <li><a href="#about-me" >Blogs</a></li>
          </ul>
   </nav>
   <section className ="home" id='summary'>
        <div className='image__container'>
        
          <div className="bigger__circle"></div>
          <div className="smaller__circle"></div>
          <div className="circle_image">
            <img src={"https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360"} alt="" width={300}  style={{borderRadius:150}}    />
          </div>
        </div>

        <div className="details">
            <h3 className='greeting details__child'>Hello, I am </h3>
            <h1 className='heading details__child typewriter '>Gaurav Kumar Mandal</h1>
            <p className='intro details__child'>Highly skilled web developer with expertise in the MERN stack MongoDB, Express.js, React, and Node.js. Proficient in HTML,
              CSS, and JavaScript, with a strong understanding of front-end development. Familiarity with REST APIs, MVC frameworks,
              and popular JavaScript library like React</p>
        </div>
   </section>
    </>


  )
}

export default Home