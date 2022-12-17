import AboutStyled from "./AboutStyled";

const About = () => {
  return (
    <AboutStyled id="about me">
      <div className="about">
        <h3 className="about__title">
          about <strong className="about__title-main">me</strong>
        </h3>
        <p
          className="about__content"
          aria-label="introduction about oriol raventós"
        >
          My name is oriol raventós and I'm a{" "}
          <strong className="about__content-main">
            Junior Front End Developer
          </strong>{" "}
          based in <strong className="about__content-main">Barcelona</strong>. I
          describe myself as a passionate developer who loves{" "}
          <strong className="about__content-main">coding</strong>, creating new
          content for the internet and facing new challenges.
        </p>{" "}
        <br />
        <p
          className="about__content"
          aria-label="past proffesional experiences"
        >
          Not so long ago I used to work as a{" "}
          <strong className="about__content-main">SEO Technician</strong>, but
          now I work with code.
        </p>
        <br />{" "}
        <p className="about__content" aria-label="free time activities">
          Aside from my job, I like to enjoy my free time climbing, running or
          on tech meetups around Barcelona.
        </p>
      </div>
      <div
        className="image-profile"
        aria-label="oriol raventós profile picture"
      ></div>
    </AboutStyled>
  );
};

export default About;
