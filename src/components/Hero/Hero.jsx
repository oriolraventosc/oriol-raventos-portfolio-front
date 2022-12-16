import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import HeroStyled from "./HeroStyled";

const Hero = () => {
  return (
    <>
      <HeroStyled>
        <div className="hero">
          <p>Hello.</p>
          <span>
            I am <h1>oriol raventós.</h1>
          </span>
          <div className="hero__typed-out">
            <p className="hero__typed-erase" aria-label="front end developer">
              Front End Developer
            </p>
          </div>
          <button>Let's get in touch</button>
        </div>
      </HeroStyled>
      <div className="next-button">
        <ExpandCircleDownIcon
          className="next-button-icon"
          sx={{
            fontSize: "3rem",
          }}
        />
      </div>
    </>
  );
};

export default Hero;
