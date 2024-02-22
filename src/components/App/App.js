import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Blogpage from "../../pages/Blogpage/Blogpage";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
