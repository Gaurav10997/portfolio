import Project from './Project'
import "./Projects.css"
function Projects() {
  const projects = [{
    title: "Full stack Boat Clone",
    images:[],
    github:"https://github.com/Gaurav10997/Ecommerce",
    url:"https://bewildered-sunbonnet-cow.cyclic.app/",
    description:" The Full Stack Boat Clone is a MERN project mimicking an online boat marketplace, covering both front-end and back-end development for boat listings and sales.",
    techStackUsed:[ "React", "Redux","Mongodb","Stripe","Nodejs","Express","mongoose"],
    
  },
  {
    title: "The Coding Community",
    images:[],
    github:"https://github.com/Gaurav10997/The-Pink-Community",
    url:"https://luxury-empanada-76d75d.netlify.app/",
    description:"The Coding Community is a LeetCode-like platform built with React for the front-end and Spring Boot for the back-end, enabling users to create and solve data structure and algorithm questions.",
    techStackUsed:[ "React","Redux", "MUI","CSS" ,"Java", "SpringBoot",],
    
  },
  {
    title: "Portfolio Website",
    images:[],
    github:"https://github.com/Gaurav10997/portfolio",
    url:"https://mellow-tanuki-6ca88d.netlify.app/",
    description:" My portfolio website, created with React, showcases my skills, projects, and experiences. It's a dynamic and interactive platform where visitors can explore my work and learn more about me.",
    techStackUsed:[ "HTML" ,"CSS" ,"JAVASCRIPT" ,"REACT","Mui"],
    
  },
  {
    title: "Library Management System",
    images:[],
    github:"https/github.com",
    url:"netlify.com",
    description:"A Library Management System is a robust backend system built using Spring Boot, comprising approximately 30 APIs. This system efficiently manages library resources, including books, patrons, and transactions, providing essential functionalities for library operations.",
    techStackUsed:[ "Java", "SpringBoot" ,"Springweb" ,"Swagger","Lombook"],
    
  },

  {
    title: "AirBnb Clone",
    images:[],
    github:"https/github.com",
    url:"netlify.com",
    description:"Comming Soon ...",
    techStackUsed:[ "HTML" ,"CSS" ,"JAVASCRIPT" ,"REACT", "Node","Mongodb"],
    
  },

]

  return (
    <div className=" section__main projects__Section__main">
      <br />
      <h1 className='section__main__heading'>Projects</h1>
      <br />
      <div className="section__main__inner   project__section__innermain">
            {projects.map((project, index) => {
              return (
                  <Project 
                      key={index}
                      title={project.title}  
                      images={project.images}  
                      github={project.github}  
                      url={project.url}  
                      description={project.description}  
                      techStackUsed={project.techStackUsed}
                  >
                  </Project>
              );
          })}
      </div>
     
    </div>

  )
}

export default Projects