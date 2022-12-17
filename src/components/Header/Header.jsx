import HeaderStyled from "./HeaderStyled";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  const mainMenuButtonClassName = isOpen
    ? "header-mobile-navigation--show"
    : "header-mobile-navigation";
  return (
    <HeaderStyled>
      <section>
        <div className="header-mobile">
          <a
            href="#top-page"
            aria-label="oriol-raventos-portfolio-top"
            onClick={closeMenu}
          >
            <span className="header-mobile__title">{"{ or }"}</span>
          </a>
          <div className="hamburger">
            <Hamburger
              toggled={isOpen}
              rounded
              left="40px"
              aria-label="toggle-menu"
              direction="left"
              size={20}
              color="#fff"
              duration={0.1}
              onToggle={() => toggleMenu()}
            />
          </div>
        </div>
        <div className={mainMenuButtonClassName} aria-label="portfolio-menu">
          <a
            href="#about me"
            className="header-mobile__navigation__item"
            onClick={closeMenu}
          >
            about me
          </a>
          <a
            href="https://www.google.es"
            className="header-mobile__navigation__item"
            onClick={closeMenu}
          >
            projects
          </a>
          <a
            href="https://www.google.es"
            className="header-mobile__navigation__item"
            onClick={closeMenu}
          >
            contact
          </a>
        </div>
      </section>
      <section className="header-desktop">
        <a href="#top-page" aria-label="oriol-raventos-portfolio-top">
          <span className="header-desktop__title">{"{ oriol raventós}"}</span>
        </a>
        <div
          className="header-desktop__navigation"
          aria-label="portfolio-desktop-menu"
        >
          <a href="#about me" className="header-desktop__navigation__item">
            about me
          </a>
          <a
            href="https://www.google.es"
            className="header-desktop__navigation__item"
          >
            projects
          </a>
          <a
            href="https://www.google.es"
            className="header-desktop__navigation__item"
          >
            contact
          </a>
        </div>
      </section>
    </HeaderStyled>
  );
};

export default Header;
