import { useEffect } from "react";
import useProject from "../../utils/fetchBase";
import Loader from "../Loader/Loader";
import ProjectsStyled from "./ProjectsStyled";

const Projects = () => {
  const { loadAllProjects, result } = useProject();
  const { loading } = result;
  useEffect(() => {
    loadAllProjects();
  }, [loadAllProjects]);
  const results = result.data;
  console.log(loading);
  return (
    <>
      {loading === true && <Loader />}
      <ProjectsStyled>
        <h3>projects</h3>
        <div className="projects__list">
          {results.map((project) =>
            project.map((projects, index) => (
              <div className="img__wrap" key={index}>
                <img
                  className="img__img"
                  src={projects.picture}
                  width="100%"
                  height="100%"
                  alt={projects.name}
                />
                <div className="img__description">
                  <a href={projects.url}>
                    <h3 className="img__description__title">{projects.name}</h3>
                  </a>
                  <a
                    className="hover-underline-animation"
                    href={projects.source}
                    aria-label="bluestate"
                  >
                    View code
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </ProjectsStyled>
    </>
  );
};

export default Projects;
