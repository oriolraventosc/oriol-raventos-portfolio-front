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
    .article__content {
      display: block;
      &--title {
        max-width: 100%;
        width: 100%;
        font-size: 2.7rem;
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
    }
  }
  @media (min-width: 1049px) {
  }

  @media (min-width: 1900px) {
    .article__content {
      padding-right: 5rem;
      padding-left: 5rem;
    }
    .article__main-image {
      padding-right: 5rem;
      padding-left: 5rem;
    }
    img {
      max-height: 800px;
    }
  }
`;

export default ArticlePageStyled;
