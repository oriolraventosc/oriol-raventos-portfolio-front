import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const BlogpageStyled = styled.section`
  p {
    margin: 0;
  }
  margin-top: 3.73125rem;
  img {
    max-width: 100%;
    max-height: 310px;
    object-fit: cover;
  }
  .blog {
    &__article {
      background-color: #ace50ac4;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &__container {
        padding-top: 1rem;
      }
    }
    &__article:hover {
      cursor: pointer;
    }
    &__articles {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    &__title {
      margin: 0;
      color: ${MainTheme.colors.mainWhite};
      font-weight: bold;
      padding-bottom: 1.5rem;
      padding-top: 1rem;
      text-align: center;
    }
    &__article__time {
      margin: 0;
      color: ${MainTheme.colors.mainGrey};
      font-weight: bold;
      margin-top: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1rem;
    }
    &__article__title {
      color: ${MainTheme.colors.mainWhite};
      text-align: center;
      max-width: 100%;
      margin-top: 0;
      margin-bottom: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1.7rem;
    }
    &__article__description {
      display: inline-block;
      color: ${MainTheme.colors.mainWhite};
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1.2rem;
      padding-bottom: 1rem;
      text-align: center;
    }
    &__article__image {
      background-color: ${MainTheme.colors.mainGreen};
      width: 100%;
    }
  }
  @media (min-width: 426px) {
    .blog {
      &__title {
        margin: 0;
        color: ${MainTheme.colors.mainWhite};
        font-weight: bold;
        padding-bottom: 0.5rem;
        text-align: center;
      }
      &__article__time {
        margin: 0;
        color: ${MainTheme.colors.mainGrey};
        font-weight: bold;
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;
      }
      &__article__title {
        text-align: center;
        max-width: 100%;
        margin-top: 0;
        margin-bottom: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.7rem;
      }
      &__article__description {
        display: inline-block;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.2rem;
      }
      &__image {
      }
    }
  }
  @media (min-width: 768px) {
    p {
      text-align: left;
    }
    margin-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    flex-direction: row;
    img {
      width: 100%;
      height: 100%;
      max-height: 280px;
    }
    .blog {
      &__articles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      &__title {
        margin: 0;
        color: ${MainTheme.colors.mainWhite};
        font-weight: bold;
        padding-bottom: 1.5rem;
        padding-top: 1rem;
        text-align: center;
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
      }
    }
  }

  @media (min-width: 1024px) {
    margin-top: 6rem;
    .blog {
      &__title {
        margin: 0;
        color: ${MainTheme.colors.mainWhite};
        font-weight: bold;
        padding-bottom: 2rem;
        padding-top: 1rem;
        text-align: center;
      }
      &__articles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
      &__article__title {
        color: ${MainTheme.colors.mainWhite};
        text-align: center;
        max-width: 100%;
        margin-top: 0;
        margin-bottom: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1%.7;
      }
      &__article__description {
        display: inline-block;
        color: ${MainTheme.colors.mainWhite};
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.2rem;
        padding-bottom: 1rem;
        text-align: center;
      }
      &__article {
        &__description {
        }
        &__container {
        }
      }
    }
  }

  @media (min-width: 1049px) {
    .blog__article__description {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1900px) {
    margin-top: 7rem;
  }
`;

export default BlogpageStyled;
