import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const ProjectsStyled = styled.section`
  margin-top: 5rem;
  @media (min-width: 800px) {
    margin-top: 10rem;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  h3 {
    text-align: center;
    color: ${MainTheme.colors.mainGreen};
    margin: 0;
    padding-bottom: 1.5rem;
  }
  .img__description__title:hover {
    color: ${MainTheme.colors.mainWhite};
    transition: 0.3s;
  }
  .img__wrap {
    position: relative;
    width: 80%;
    @media (min-width: 426px) {
      width: 60%;
    }
    @media (min-width: 800px) {
      width: 100%;
    }
    height: 100%;
  }
  .img__description {
    position: absolute;
    top: 0;
    bottom: 4px;
    left: 0;
    right: 0;
    background: rgba(29, 106, 154, 0.72);
    color: black;
    visibility: hidden;
    opacity: 0;
    text-align: center;
    padding-top: 38%;
    margin: 0;
    color: black;
    transition: opacity 0.2s, visibility 0.2s;
    @media (min-width: 800px) {
      bottom: 0px;
      padding-top: 42%;
    }
  }
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: ${MainTheme.colors.mainGrey};
  }
  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${MainTheme.colors.mainGrey};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .img__wrap:hover .img__description {
    visibility: visible;
    opacity: 1;
    background-color: rgba(172, 229, 10, 0.7);
    border-radius: 5px;
  }
  .projects__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
  .img__description__title {
    color: ${MainTheme.colors.mainGrey};
    text-align: center;
  }
  @media (min-width: 1900px) {
    margin-top: 25rem;
  }
`;

export default ProjectsStyled;
