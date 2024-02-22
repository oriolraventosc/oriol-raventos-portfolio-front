import AboutStyled from "./AboutStyled";
import foto from "./oriol.jpg";

const About = () => {
  return (
    <AboutStyled id="about me">
      <div className="about">
        <h2 className="about__title">
          about <strong className="about__title-main">me</strong>
        </h2>
        <p
          className="about__content"
          aria-label="introduction about oriol raventós"
        >
          Hi, I'm Oriol Raventós, a <strong> Front End Developer </strong>
          based in Barcelona. Coding is my passion, and I love creating engaging
          web experiences. I enjoy tackling new challenges and turning ideas
          into innovative digital content.
          <br></br>
          <br></br>
          I'm dedicated to staying updated with the latest technologies,
          exploring different frameworks and techniques. Outside coding, I find
          joy in climbing and attending tech meetups across Barcelona. These
          experiences fuel my problem-solving skills and creativity.
          <br></br>
          <br></br>
          Driven by curiosity and a desire for growth, I aim to push boundaries
          and craft impactful solutions in web development.
        </p>
      </div>
      <div
        className="image-profile"
        aria-label="oriol raventós profile picture"
      >
        <img src={foto} alt="oriol raventós front end developer" />
      </div>
    </AboutStyled>
  );
};

export default About;
