import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const TechnologiesStyled = styled.section`
  padding-top: 5rem;
  text-align: center;
  @media (min-width: 800px) {
    text-align: center;
  }
  h2 {
    margin: 0;
    font-size: 1.6rem;
    color: ${MainTheme.colors.mainGreen};
    font-weight: bold;
    padding-bottom: 0.5rem;
    text-align: left;
    text-align: center;
    @media (min-width: 426px) {
      font-size: 1.6rem;
      text-align: center;
    }
    @media (min-width: 800px) {
      font-size: 2rem;
      text-align: center;
    }
  }
  span {
    font-size: 0.9rem;
    text-align: center;
    font-weight: bold;
    color: ${MainTheme.colors.mainWhite};
    @media (min-width: 426px) {
      font-size: 0.9rem;
      text-align: center;
    }
    @media (min-width: 800px) {
      font-size: 1.1rem;
      text-align: left;
    }
  }
  .technologies__in-use__list {
    max-width: 1200px;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 426px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
  .technologies__list__item h2 {
    font-size: 0.9rem;
    font-weight: lighter;
    text-align: center;
    color: ${MainTheme.colors.mainWhite};
    @media (min-width: 426px) {
      font-size: 0.9rem;
    }
    @media (min-width: 800px) {
      font-size: 1rem;
    }
  }
  .technologies__list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 0.5rem;
  }
  img {
    height: 120px;
    width: 120px;
    @media (min-width: 426px) {
      height: 75px;
      width: 75px;
    }
    @media (min-width: 800px) {
      height: 100px;
      width: 100px;
    }
  }
`;

export default TechnologiesStyled;
