import React from 'react'
import Skill from '../utility/Skill'
function Skillsection() {

 
  
  const frontend = [
    {
      name:"HTML5",
      percent:70,
    },
    {
      name:"CSS3",
      percent:70,
    },
    {
      name:"JAVASCRIPT",
      percent:80,
    },
    {
      name:"REACTJS",
      percent:80,
    },
    {
      name:"REACT ROUTER",
      percent:60,
    },
    {
      name:"TAILWIND CSS",
      percent:60,
    },
    {
      name:"MUI",
      percent:60,
    },
    




 ]

 const backend = [
  {
    name:"NODEJS",
    percent:85,
  },
  {
    name:"EXPRESSJS",
    percent:79,
  },

  {
    name:"MONGODB",
    percent:60,
  },
  {
    name:"MONGOOSE",
    percent:65,
  },
  {
    name:"MYSQL",
    percent:50,
  },
  {
    name:"JAVA",
    percent:80,
  },
  {
    name:"SPRING",
    percent:66,
  },
  {
    name:"SPRINGBOOT",
    percent:60,
  },


]

const tools = [
  {
    name:"GIT",
    percent:86,
  },
  {
    name:"GITHUB",
    percent:70,
  },
  {
    name:"VS CODE",
    percent:80,
  },
  {
    name:"CHROME",
    percent:87,
  },
  {
    name:"POSTMAN",
    percent:69,
  },


]
  
  return (
    <div className='section__main' id='skills' >
    <h1 className='section__main__heading'>Skills</h1>
        <div className="skill__heading">
            <h2 style={{margin:"5rem 5rem 0rem 9rem"}}>Frontend Development</h2>
            {
              frontend.map(({name,percent},index)=>{
                  return(
                    <Skill  name={name}  percent= {percent} key={index}/>
                  )
              })
            }
        </div>

        <div className="skill__heading">
        <h2 style={{margin:"5rem 5rem 0rem 9rem"}}>Backend Development</h2>
        {
              backend.map(({name,percent},index)=>{
                  return(
                    <Skill  name={name}  percent= {percent} key={index}/>
                  )
              })
            }
        </div>
        <div className="skill__heading">
        <h2 style={{margin:"5rem 5rem 0rem 9rem"}}>Development Tools</h2>
        {
              tools.map(({name,percent},index)=>{
                  return(
                    <Skill  name={name}  percent= {percent} key={index}/>
                  )
              })
            }
        </div>
       
    </div>
  )
}
export default Skillsection