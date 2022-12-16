import AboutStyled from "./AboutStyled";

const About = () => {
  return (
    <AboutStyled id="about me">
      <div className="about">
        <p className="about__title">
          about <span className="about__title-main">me</span>
        </p>
        <p
          className="about__content"
          aria-label="introduction about oriol raventós"
        >
          My name is oriol raventós and I'm a{" "}
          <span className="about__content-main">
            Junior Front End Developer
          </span>{" "}
          based in <span className="about__content-main">Barcelona</span>. I
          describe myself as a passionate developer who loves{" "}
          <span className="about__content-main">coding</span>, creating new
          content for the internet and facing new challenges.
        </p>{" "}
        <br />
        <p
          className="about__content"
          aria-label="past proffesional experiences"
        >
          Not so long ago I used to work as a{" "}
          <span className="about__content-main">SEO Technician</span>, but now I
          work with code.
        </p>
        <br />{" "}
        <p className="about__content" aria-label="free time activities">
          Aside from my job, I like to enjoy my free time climbing, running or
          on tech meetups around Barcelona.
        </p>
      </div>
      <img
        src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/oriol.webp?t=2022-12-16T10%3A10%3A25.034Z"
        alt="oriol raventós Front End Developer"
      />
    </AboutStyled>
  );
};

export default About;
