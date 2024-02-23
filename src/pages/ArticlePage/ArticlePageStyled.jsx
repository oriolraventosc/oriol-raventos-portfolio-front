import styled from "styled-components";

const ArticlePageStyled = styled.section`
  img {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }
  color: #fff;
  .article__main-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .article__content--title {
    max-width: 600px;
  }
  .article__content--main {
    max-width: 600px;
  }
  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__level2-header {
      text-align: left;
      width: 100%;
      max-width: 600px;
    }
    p {
      margin-bottom: 0;
    }
  }
  ol {
    padding-inline-start: 0;
  }
  p {
    max-width: 600px;
  }
  h2,
  h3 {
    font-weight: 400;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 20px;
  }
  @media (min-width: 426px) {
    img {
      object-fit: cover;
      width: 100%;
      height: 400px;
      max-width: 600px;
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    h3 {
      font-size: 1.8rem;
    }
    img {
      max-width: 100%;
      height: 100%;
      max-height: 550px;
    }
    .article__main-image {
      padding-right: 10rem;
      padding-left: 10rem;
    }
    .article__content {
      display: block;
      padding-right: 10rem;
      padding-left: 10rem;
      &--title {
        max-width: 100%;
        width: 100%;
        font-size: 2.5rem;
      }
    }
    .content-box {
      display: block;
      h2,
      h3,
      p {
        max-width: 100%;
        width: 100%;
      }
      p {
        font-size: 1.25rem;
      }
      h2 {
        font-size: 1.75rem;
      }
      h3 {
        font-size: 1.45rem;
      }
    }
  }
  @media (min-width: 1300px) {
    .article__main-image {
      padding-right: 12rem;
      padding-left: 12rem;
    }
    .article__content {
      padding-right: 12rem;
      padding-left: 12rem;
    }
  }
  @media (min-width: 1440px) {
    .article__main-image {
      padding-right: 15rem;
      padding-left: 15rem;
    }
    .article__content {
      padding-right: 15rem;
      padding-left: 15rem;
    }
  }

  @media (min-width: 1600px) {
    .article__main-image {
      padding-right: 17rem;
      padding-left: 17rem;
    }
    .article__content {
      padding-right: 17rem;
      padding-left: 17rem;
    }
  }

  @media (min-width: 1700px) {
    .article__main-image {
      padding-right: 18rem;
      padding-left: 18rem;
    }
    .article__content {
      padding-right: 18rem;
      padding-left: 18rem;
    }
  }

  @media (min-width: 1900px) {
    .article__main-image {
      padding-right: 20rem;
      padding-left: 20rem;
    }
    .article__content {
      padding-right: 20rem;
      padding-left: 20rem;
    }
    img {
      max-height: 600px;
    }
  }
`;

export default ArticlePageStyled;
