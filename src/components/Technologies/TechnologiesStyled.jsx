import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const TechnologiesStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (min-width: 800px) {
    margin-top: 10rem;
  }
  text-align: center;
  @media (min-width: 800px) {
    text-align: center;
  }
  h3 {
    margin: 0;

    color: ${MainTheme.colors.mainGreen};
    font-weight: bold;
    padding-bottom: 1rem;
    text-align: left;
    text-align: center;
    @media (min-width: 426px) {
      text-align: center;
    }
    @media (min-width: 800px) {
      text-align: center;
    }
  }
  h5 {
    margin: 0;
    text-align: center;
    font-weight: bold;
    color: ${MainTheme.colors.mainWhite};
    @media (min-width: 426px) {
      text-align: center;
    }
    @media (min-width: 800px) {
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
      gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  .technologies__list__item h4 {
    font-weight: lighter;
    text-align: center;
    padding: 0;
    margin: 0;
    color: ${MainTheme.colors.mainGrey};
  }
  .technologies__list__item {
    background-color: ${MainTheme.colors.mainWhite};
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 5px;
  }
  img {
    height: 120px;
    width: 120px;
    @media (min-width: 426px) {
      height: 75px;
      width: 75px;
    }
    @media (min-width: 800px) {
      height: auto;
      width: 44%;
    }
  }
`;

export default TechnologiesStyled;
