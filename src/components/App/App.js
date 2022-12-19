import About from "../About/About";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

const App = () => {
  return (
    <>
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
