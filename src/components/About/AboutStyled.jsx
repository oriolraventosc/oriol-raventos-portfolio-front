import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const AboutStyled = styled.section`
  margin-top: 5rem;
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
    height: 250px;
    border-radius: 5px;
  }
  .about {
    &__title {
      margin: 0;
      color: ${MainTheme.colors.mainWhite};
      font-weight: bold;
      padding-bottom: 0.5rem;
      text-align: center;
    }
    &__title-main {
      margin: 0;
      color: ${MainTheme.colors.mainGreen};
      font-weight: bold;
    }
    &__content {
      color: ${MainTheme.colors.mainWhite};
      text-align: center;
      max-width: 400px;
    }
    &__content-main {
      display: inline-block;
      color: ${MainTheme.colors.mainGreen};
      margin: 0;
    }
    &__image {
      background-color: ${MainTheme.colors.mainGreen};
      width: 250px;
      height: 350px;
      border-radius: 5px;
    }
  }
  @media (min-width: 426px) {
    margin-top: 5rem;
    img {
      width: 350px;
      height: 350px;
      border-radius: 5px;
    }
    .about {
      &__title {
        margin: 0;
        color: ${MainTheme.colors.mainWhite};
        font-weight: bold;
        padding-bottom: 0.5rem;
        text-align: center;
      }
      &__title-main {
        margin: 0;
        color: ${MainTheme.colors.mainGreen};
        font-weight: bold;
      }
      &__content {
        color: ${MainTheme.colors.mainWhite};
        text-align: center;
        max-width: 600px;
      }
      &__content-main {
        display: inline-block;
        color: ${MainTheme.colors.mainGreen};
        margin: 0;
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
    margin-top: 10rem;
    flex-direction: row;
    img {
      width: 100%;
      height: auto;
    }
    .about {
      &__title {
        margin: 0;
        color: ${MainTheme.colors.mainWhite};
        font-weight: bold;
        padding-bottom: 0.5rem;
        text-align: left;
      }
      &__title-main {
        margin: 0;
        color: ${MainTheme.colors.mainGreen};
        font-weight: bold;
      }
      &__content {
        color: ${MainTheme.colors.mainWhite};
        text-align: left;
        max-width: fit-content;
      }
      &__content-main {
        display: inline-block;
        color: ${MainTheme.colors.mainGreen};
        margin: 0;
      }
      &__image {
        background-color: ${MainTheme.colors.mainGreen};
        width: 300px;
        height: 400px;
        border-radius: 5px;
      }
    }
  }
  .image-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    border-radius: 5px;
    background-position: center top;
    @media (min-width: 426px) {
      width: 60%;
    }
    @media (min-width: 800px) {
      height: 500px;
      max-width: 1000px;
      width: 100%;
      min-width: 300px;
    }
  }
  @media (min-width: 1900px) {
    margin-top: 25rem;
  }
`;

export default AboutStyled;
