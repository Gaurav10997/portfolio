import React from 'react'
import "./Home.css"

// import Brightness7Icon from '@mui/icons-material/Brightness7';
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
            
            {/* <Brightness7Icon /> */}
        </ul>
        
   </nav>
   <section className ="home">
    <div className='image'>

    </div>
    <div className="details">
        <h3 className='greeting details__child'>Hello, I am </h3>
        <h1 className='heading details__child '>Gaurav Kumar Mandal</h1>
        <p className='intro details__child'>A passionate UI Developer with around 8.8 years of experience in designing and developing web & mobile applications using tools and technologies like React, React Native, Figma, Blender etc.</p>
    </div>
   </section>
    </>


  )
}

export default Home