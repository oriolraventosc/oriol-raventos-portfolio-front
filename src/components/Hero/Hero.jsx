import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import HeroStyled from "./HeroStyled";

const Hero = () => {
  return (
    <>
      <HeroStyled id="top-page" aria-label="hero">
        <div className="hero">
          <p>Hello.</p>
          <h1>
            I am <strong>oriol raventós.</strong>
          </h1>
          <div className="hero__typed-out">
            <p className="hero__typed-erase" aria-label="front end developer">
              Front End Developer
            </p>
          </div>
          <a href="#contact">
            <button>Let's get in touch</button>
          </a>
        </div>
      </HeroStyled>
      <div className="next-button">
        <a href="#about me" aria-label="next button">
          <ExpandCircleDownIcon
            className="next-button-icon"
            sx={{
              fontSize: "3rem",
            }}
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
