import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const AboutStyled = styled.section`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  p {
    margin: 0;
  }
  img {
    width: 250px;
    height: 350px;
    opacity: 0.7;
    border-radius: 5px;
  }
  .about {
    &__title {
      font-size: 1.6rem;
      margin: 0;
      color: ${MainTheme.colors.mainWhite};
      font-weight: bold;
      padding-bottom: 0.5rem;
      text-align: center;
    }
    &__title-main {
      font-size: 1.6rem;
      margin: 0;
      color: ${MainTheme.colors.mainGreen};
      font-weight: bold;
    }
    &__content {
      color: ${MainTheme.colors.mainWhite};
      font-size: 0.9rem;
      text-align: center;
      max-width: 400px;
    }
    &__content-main {
      display: inline-block;
      color: ${MainTheme.colors.mainGreen};
      margin: 0;
      font-size: 0.9rem;
    }
    &__image {
      background-color: ${MainTheme.colors.mainGreen};
      width: 250px;
      height: 350px;
      border-radius: 5px;
    }
  }
  @media (min-width: 426px) {
    padding-top: 5rem;
    img {
      width: 350px;
      height: 450px;
      border-radius: 5px;
    }
    .about {
      &__title {
        font-size: 1.6rem;
        margin: 0;
        color: ${MainTheme.colors.mainWhite};
        font-weight: bold;
        padding-bottom: 0.5rem;
        text-align: center;
      }
      &__title-main {
        font-size: 1.6rem;
        margin: 0;
        color: ${MainTheme.colors.mainGreen};
        font-weight: bold;
      }
      &__content {
        color: ${MainTheme.colors.mainWhite};
        font-size: 0.9rem;
        text-align: center;
        max-width: 600px;
      }
      &__content-main {
        display: inline-block;
        color: ${MainTheme.colors.mainGreen};
        margin: 0;
        font-size: 0.9rem;
      }
      &__image {
        background-color: ${MainTheme.colors.mainGreen};
        width: 350px;
        height: 450px;
        border-radius: 5px;
      }
    }
  }
  @media (min-width: 800px) {
    p {
      text-align: left;
    }
    padding-top: 5rem;
    flex-direction: row;
    img {
      width: 300px;
      height: 400px;
    }
    .about {
      &__title {
        font-size: 2rem;
        margin: 0;
        color: ${MainTheme.colors.mainWhite};
        font-weight: bold;
        padding-bottom: 0.5rem;
        text-align: left;
      }
      &__title-main {
        font-size: 2rem;
        margin: 0;
        color: ${MainTheme.colors.mainGreen};
        font-weight: bold;
      }
      &__content {
        color: ${MainTheme.colors.mainWhite};
        font-size: 1.1rem;
        text-align: left;
      }
      &__content-main {
        display: inline-block;
        color: ${MainTheme.colors.mainGreen};
        margin: 0;
        font-size: 1.1rem;
      }
      &__image {
        background-color: ${MainTheme.colors.mainGreen};
        width: 300px;
        height: 400px;
        border-radius: 5px;
      }
    }
  }
`;

export default AboutStyled;
