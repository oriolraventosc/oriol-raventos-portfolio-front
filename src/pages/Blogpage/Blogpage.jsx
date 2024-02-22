import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BlogpageStyled from "./BlogpageStyled";
import { articles } from "../../utils/articles/articles";

const Blogpage = () => {
  const navigate = useNavigate();

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <>
      <Header />
      <BlogpageStyled>
        <h2 className="blog__title">Blog</h2>
        <section className="blog__articles">
          {articles.map((article) => (
            <div
              className="blog__article"
              key={article.id}
              onClick={() => handleArticleClick(article.id)}
            >
              <img
                className="blog__article__image"
                src={article.mainImage}
                alt={article.title}
              />
              <article className="blog__article__container">
                <h3 className="blog__article__title">{article.title}</h3>
                <p className="blog__article__description">
                  {article.description}
                </p>
              </article>
            </div>
          ))}
        </section>
      </BlogpageStyled>
      <Footer />
    </>
  );
};

export default Blogpage;
