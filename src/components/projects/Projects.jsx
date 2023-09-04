import Project from './Project'
import "./Projects.css"
function Projects() {
  const projects = [{
    title: "Full stack Boat Clone",
    images:[],
    github:"https/github.com",
    url:"netlify.com",
    description:" at dolore quaerat distinctio est vitae earum deserunt odio quam facilis!   at dolore quaerat distinctio est vitae earum deserunt odio quam facilis! at dolore quaerat distinctio est vitae earum deserunt odio quam facilis!",
    techStackUsed:[ "HTML" ,"CSS" ,"JAVASCRIPT" ,"REACT", "Node","Mongodb"],
    
  },
  {
    title: "The Coding Community",
    images:[],
    github:"https/github.com",
    url:"netlify.com",
    description:" at dolore quaerat distinctio est vitae earum deserunt odio quam facilis!",
    techStackUsed:[ "HTML" ,"CSS" ,"JAVASCRIPT" ,"REACT", "Node","Mongodb"],
    
  },

  {
    title: "AirBnb Clone",
    images:[],
    github:"https/github.com",
    url:"netlify.com",
    description:" at dolore quaerat distinctio est vitae earum deserunt odio quam facilis!",
    techStackUsed:[ "HTML" ,"CSS" ,"JAVASCRIPT" ,"REACT", "Node","Mongodb"],
    
  },
  {
    title: "Library Management System",
    images:[],
    github:"https/github.com",
    url:"netlify.com",
    description:" at dolore quaerat distinctio est vitae earum deserunt odio quam facilis!",
    techStackUsed:[ "HTML" ,"CSS" ,"JAVASCRIPT" ,"REACT", "Node","Mongodb"],
    
  },
  {
    title: "Portfolio Website",
    images:[],
    github:"https/github.com",
    url:"netlify.com",
    description:" at dolore quaerat distinctio est vitae earum deserunt odio quam facilis!",
    techStackUsed:[ "HTML" ,"CSS" ,"JAVASCRIPT" ,"REACT", "Node","Mongodb"],
    
  },


  

]

  return (
    <div className=" section__main projects__Section__main">
      <br />
      <h1 className='section__main__heading   '>Projects</h1>
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