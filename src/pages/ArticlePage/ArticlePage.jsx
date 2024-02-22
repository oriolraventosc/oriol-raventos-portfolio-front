import parse from "html-react-parser";
import { articles } from "../../utils/articles/articles";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticlePageStyled from "./ArticlePageStyled";

const ArticlePage = () => {
  const { id } = useParams();
  const articleId = parseInt(id, 10);
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <Header />
      <ArticlePageStyled>
        <div className="article__main-image">
          <img src={article.mainImage} alt={article.title}></img>
        </div>
        <div className="article__content">
          <h2
            className="article__content--title"
            style={{ color: "#fff", fontWeight: "bold" }}
          >
            {article.title}
          </h2>
          {parse(article.content)}
        </div>
      </ArticlePageStyled>
      <Footer />
    </>
  );
};

export default ArticlePage;
