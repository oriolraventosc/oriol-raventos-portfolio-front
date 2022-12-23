import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import FooterStyled from "./FooterStyled";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <FooterStyled>
      <p aria-label="created by oriol raventós">
        created by <strong>oriol raventós</strong>
      </p>
      <div className="footer-icons">
        <a
          href="https://github.com/oriolraventosc"
          alt="oriol raventós github profile"
          aria-label="oriol raventós github profile"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            className="icon"
            sx={{
              fontSize: "1.7rem",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/oriolraventosc/"
          alt="oriol raventós linkedin profile"
          aria-label="oriol raventós linkedin profile"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            className="icon"
            sx={{
              fontSize: "1.7rem",
            }}
          />
        </a>
        <a
          href="mailto: oriol.raventos.c@gmail.com"
          alt="oriol raventós e-mail"
          aria-label="oriol raventós email"
        >
          <EmailIcon
            className="icon"
            sx={{
              fontSize: "1.7rem",
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/oraventosc/"
          alt="oriol raventós instagram profile"
          aria-label="oriol raventós instagram profile"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon
            className="icon"
            sx={{
              fontSize: "1.7rem",
            }}
          />
        </a>
        <a
          href="https://twitter.com/oraventosc"
          alt="oriol raventós twitter profile"
          aria-label="oriol raventós twitter profile"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon
            className="icon"
            sx={{
              fontSize: "1.7rem",
            }}
          />
        </a>
        <a
          href="tel: 664622830"
          alt="oriol raventós telephone number"
          aria-label="oriol raventós telephone number"
        >
          <CallIcon
            className="icon"
            sx={{
              fontSize: "1.7rem",
            }}
          />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
