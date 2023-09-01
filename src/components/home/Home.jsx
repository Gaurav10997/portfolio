import React from 'react'
import "./Home.css"
function Home() {
  return (
    <>
    <nav>
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
          <div className="circle_image"></div>
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