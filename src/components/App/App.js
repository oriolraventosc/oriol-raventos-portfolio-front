import { useEffect, useState } from "react";
import useProject from "../../utils/fetchBase";
import About from "../About/About";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Loader from "../Loader/Loader";
import Projects from "../Projects/Projects";

const App = () => {
  const { loadAllProjects, result } = useProject();
  const { loading } = result;
  useEffect(() => {
    loadAllProjects();
  }, [loadAllProjects]);
  return (
    <>
      {loading === true && <Loader />}
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  );
};

export default App;
