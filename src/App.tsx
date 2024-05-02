import "./App.css"
import { projects } from "./Data/projects"

function App() {
  return (
    <main>
      <div className="about-me-container">
        <h1>__DANIELA PARK__</h1>
        <h2>_Junior Software Developer_</h2>
        <div role="image" className="about-me-image" aria-label="sketch"></div>
        <p>
          <li>A former architect</li>
          <li>In the career changing journey to IT</li>
          <li>Enjoying coding at TechSwitch</li>
          <li>JavaScript, React, HTML, CSS, C#, SQL</li>
          <li>Vegetarian, cyclist, baker</li>
        </p>
        <div className="get-in-touch">
         <h3>Get in touch!</h3>
          <a href="https://github.com/daniela-park"><img className="icon" src="src\Assets\GitHub.png" alt="Github icon"/></a>
          <a href="https://www.linkedin.com/in/daniela-park/"><img className="icon" src="src\Assets\Linkedin.png" alt="Linkedin icon"/></a>
        </div>
      </div>


      <div className="projects-container">
        {projects.map((Project) => (
          <a href={Project.link} className="project-tile">
            <img className="project-image" src={Project.image}></img>
            <div className="project-details">
              <h2>{Project.name}</h2>
              <p>{Project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}

export default App