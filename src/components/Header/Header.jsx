import HeaderStyled from "./HeaderStyled";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [navBar, setNavbar] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  const mainMenuButtonClassName = isOpen
    ? "header-mobile-navigation--show"
    : "header-mobile-navigation";

  const changeNavbarColor = () => {
    if (window.scrollY) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <HeaderStyled>
      <section>
        <div
          className={navBar ? "header-mobile active" : "header-mobile"}
          aria-label="main-menu"
        >
          <a
            href="/home"
            aria-label="oriol-raventos-portfolio-top"
            onClick={closeMenu}
          >
            <span className="header-mobile__title">{"{ or }"}</span>
          </a>
          <div className="hamburger" aria-label="hamburger-menu">
            <Hamburger
              toggled={isOpen}
              left="40px"
              aria-label="toggle-menu"
              direction="left"
              size={20}
              color={navBar ? "#1F1F20" : "#fff"}
              duration={0.1}
              onToggle={() => toggleMenu()}
            />
          </div>
        </div>
        <div className={mainMenuButtonClassName} aria-label="portfolio-menu">
          <a
            href="/home"
            className="header-mobile__navigation__item"
            onClick={closeMenu}
          >
            about me
          </a>
          <a
            href="/home"
            className="header-mobile__navigation__item"
            onClick={closeMenu}
          >
            projects
          </a>
          <a
            href="/home"
            className="header-mobile__navigation__item"
            onClick={closeMenu}
          >
            contact
          </a>
          <a
            href="/blog"
            className="header-mobile__navigation__item"
            onClick={closeMenu}
          >
            blog
          </a>
        </div>
      </section>
      <section className={navBar ? "header-desktop active" : "header-desktop"}>
        <a href="/home" aria-label="oriol-raventos-portfolio-top">
          <span className="header-desktop__title">{"{ oriol raventós }"}</span>
        </a>
        <div
          className="header-desktop__navigation"
          aria-label="portfolio-desktop-menu"
        >
          <a
            href="/home"
            className={
              navBar
                ? "header-desktop__navigation__item active-menu-anchor"
                : "header-desktop__navigation__item"
            }
          >
            about me
          </a>
          <a
            href="/home"
            className={
              navBar
                ? "header-desktop__navigation__item active-menu-anchor"
                : "header-desktop__navigation__item"
            }
          >
            projects
          </a>
          <a
            href="/home"
            className={
              navBar
                ? "header-desktop__navigation__item active-menu-anchor"
                : "header-desktop__navigation__item"
            }
          >
            contact
          </a>
          <a
            href="/blog"
            className={
              navBar
                ? "header-desktop__navigation__item active-menu-anchor"
                : "header-desktop__navigation__item"
            }
          >
            blog
          </a>
        </div>
      </section>
    </HeaderStyled>
  );
};

export default Header;
