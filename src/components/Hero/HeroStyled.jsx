import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const HeroStyled = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 300px;
  @media (min-width: 426px) {
    height: 400px;
  }
  @media (min-width: 800px) {
    height: 450px;
  }
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    p,
    span,
    h1 {
      color: ${MainTheme.colors.mainWhite};
      font-size: 1.5rem;
      font-weight: 800;
      @media (min-width: 426px) {
        font-size: 2rem;
      }
      @media (min-width: 800px) {
        font-size: 2.5rem;
      }
    }
    h1 {
      color: ${MainTheme.colors.mainGreen};
    }
    &__typed-out {
      padding-top: 5px;
      padding-bottom: 15px;
      display: flex;
      align-items: center;
    }
    &__typed-out p {
      color: ${MainTheme.colors.mainWhite};
      font-size: 1.5rem;
      @media (min-width: 426px) {
        font-size: 2rem;
      }
      @media (min-width: 800px) {
        font-size: 2.5rem;
      }
      width: 0;
      max-width: max-content;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
      border-right: 3px solid #ace50a;
    }
    &__typed-erase {
      animation: 5s typing-erase 4s infinite, blink-caret 0.5s step-end infinite;
    }
  }

  .hero:first-child {
    display: block;
    padding-bottom: 5px;
  }
  h1 {
    display: inline-block;
  }
  p,
  h1 {
    margin: 0;
  }

  @keyframes typing-erase {
    0% {
      width: 0;
    }
    80% {
      width: 100%;
    }

    90%,
    100% {
      width: 0;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${MainTheme.colors.mainGreen};
    }
  }
  button {
    color: ${MainTheme.colors.mainWhite};
    border-radius: ${MainTheme.borderRadius};
    border: 1.5px solid #ace50a;
    background-color: ${MainTheme.colors.mainGrey};
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 0.8rem;
    font-weight: lighter;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (min-width: 426px) {
      font-size: 1rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    @media (min-width: 800px) {
      font-size: 1.2rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }
  button:hover {
    background-color: ${MainTheme.colors.mainWhite};
    border-color: ${MainTheme.colors.mainWhite};
    color: ${MainTheme.colors.mainGrey};
    cursor: pointer;
    transition: 0.3s;
  }
`;

export default HeroStyled;
