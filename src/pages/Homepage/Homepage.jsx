import About from "../../components/About/About";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Homepage;
