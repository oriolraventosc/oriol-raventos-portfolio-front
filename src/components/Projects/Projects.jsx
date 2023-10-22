import ProjectsStyled from "./ProjectsStyled";
import { projects } from "../../utils/projects/projects";

const Projects = () => {
  const results = projects;
  return (
    <>
      <ProjectsStyled id="projects">
        <h2>projects</h2>
        <div className="projects__list" aria-label="projects list">
          {results.map((project, index) => (
            <div className="img__wrap" key={index}>
              <img
                className="img__img"
                src={project.picture}
                width="100%"
                height="100%"
                alt={project.name}
              />
              <div className="img__description">
                <a href={project.url}>
                  <h3 className="img__description__title">{project.name}</h3>
                </a>
                <a
                  className="hover-underline-animation"
                  href={project.source}
                  aria-label="bluestate"
                >
                  View code
                </a>
              </div>
            </div>
          ))}
        </div>
      </ProjectsStyled>
    </>
  );
};

export default Projects;
