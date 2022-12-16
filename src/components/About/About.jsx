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
          <h2 className="about__content-main">Junior Front End Developer</h2>{" "}
          based in <h2 className="about__content-main">Barcelona</h2>. I
          describe myself as a passionate developer who loves{" "}
          <h2 className="about__content-main">coding</h2>, creating new content
          for the internet and facing new challenges.
        </p>{" "}
        <br />
        <p
          className="about__content"
          aria-label="past proffesional experiences"
        >
          Not so long ago I used to work as a{" "}
          <h2 className="about__content-main">SEO Technician</h2>, but now I
          work with code.
        </p>
        <br />{" "}
        <p className="about__content" aria-label="free time activities">
          Aside from my job, I like to enjoy my free time climbing, running or
          on tech meetups around Barcelona.
        </p>
      </div>
      <div className="about__image">
        <img
          src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/oriol.jpg.webp"
          alt="oriol raventós Front End Developer"
        />
      </div>
    </AboutStyled>
  );
};

export default About;
