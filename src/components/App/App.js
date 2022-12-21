import About from "../About/About";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
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
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default App;
