import "./App.css"
import { projects } from "./Data/projects"
import GitHubLogo from "/GitHub.png"
import LinkedinLogo from "/public/Linkedin.png"

function App() {
  return (
    <main>
      <div className="about-me-container">
        <h1>__DANIELA PARK__</h1>
        <div role="image" className="about-me-image" id="profileImage" aria-label="sketch"></div>
        <p>
          <li>Junior full-stack software developer</li>
          <li>JavaScript, React, HTML, CSS, C#, SQL, Java</li>
          <li>A former architect from the construction industry</li>
          <li>Vegetarian, cyclist, board-games player</li>
        </p>
        <div className="get-in-touch">
         <h3>Get in touch!</h3>
          <a href="https://github.com/daniela-park"><img className="icon" src={GitHubLogo} alt="Github icon"/></a>
          <a href="https://www.linkedin.com/in/daniela-park/"><img className="icon" src={LinkedinLogo} alt="Linkedin icon"/></a>
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

      <div className="footer">
         <h3>Get in touch!</h3>
          <a href="https://github.com/daniela-park"><img src={GitHubLogo} alt="Github icon"/></a>
          <a href="https://www.linkedin.com/in/daniela-park/"><img src={LinkedinLogo} alt="Linkedin icon"/></a>
        </div>
    </main>
  )
}

export default App