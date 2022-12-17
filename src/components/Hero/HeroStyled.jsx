import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const HeroStyled = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 300px;
  @media (min-width: 426px) {
    height: calc(100vh - 80px);
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
      font-weight: 800;
      font-size: clamp(1.56rem, calc(1.27rem + 1.43vw), 3.55rem);
      margin: 0;
      @media (min-width: 426px) {
        font-size: clamp(2.07rem, calc(1.69rem + 1.9vw), 4.74rem);
      }
      @media (min-width: 800px) {
        font-size: clamp(2.76rem, calc(2.26rem + 2.54vw), 6.31rem);
      }
    }
    &__typed-out {
      padding-top: 5px;
      padding-bottom: 15px;
      display: flex;
      align-items: center;
    }
    &__typed-out p {
      color: ${MainTheme.colors.mainWhite};
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
  h3 {
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
    font-weight: lighter;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (min-width: 426px) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    @media (min-width: 800px) {
      padding-top: 1rem;
      padding-bottom: 1rem;
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
