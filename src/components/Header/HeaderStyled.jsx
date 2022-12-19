import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const HeaderStyled = styled.header`
  .hamburger {
    position: relative;
    padding-right: 0.114rem;
  }
  .header-desktop {
    display: none;
  }

  .header-mobile-navigation {
    display: none;
  }
  .header-mobile {
    top: 0;
    z-index: 1;
    background-color: ${MainTheme.colors.mainGrey};
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    position: fixed;
    width: 100vw;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &__title {
      color: ${MainTheme.colors.mainGreen};
      font-weight: bold;
      padding-left: 1rem;
    }
    &__navigation__item {
      padding-bottom: 2rem;
    }
    &__navigation__item:nth-child(4) {
      padding-bottom: 0;
    }
    &__navigation__item:hover {
      color: ${MainTheme.colors.mainGreen};
      transition: 0.3s;
    }
    &-navigation--show {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      z-index: 0;
      position: fixed;
      height: 100vh;
      width: calc(100vw - 2rem);
      background-color: ${MainTheme.colors.mainGrey};
      z-index: 1;
    }
    &-navigation {
      display: none;
    }
    .header-mobile-navigation--show {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      z-index: 0;
      height: calc(100vh - 48px);
    }
  }
  @media (min-width: 800px) {
    .header-mobile-navigation--show {
      display: none;
    }
    .header-mobile {
      visibility: hidden;
      display: none;
    }
    .header-desktop {
      top: 0;
      width: 100%;
      left: 0;
      padding-right: 5px;
      padding-left: 5px;
      z-index: 1;
      background-color: ${MainTheme.colors.mainGrey};
      padding-top: 1.5%;
      padding-bottom: 1.5%;
      height: 80px;
      position: fixed;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      &__title {
        color: ${MainTheme.colors.mainGreen};
        font-weight: bold;
        padding-left: 3.7rem;
      }
      &__title:hover {
        cursor: pointer;
      }
      &__navigation {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding-right: 4.3rem;
        &__item:hover {
          color: ${MainTheme.colors.mainGreen};
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }
  }
  .portfolio-menu__top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    top: 5px;
    width: 100vw;
    padding-top: 1.5%;
    top: 0;
    padding-bottom: 1rem;
    background-color: ${MainTheme.colors.mainGrey};
  }
  .active {
    background-color: ${MainTheme.colors.mainWhite};
  }
  .active-menu-anchor {
    color: ${MainTheme.colors.mainGrey};
  }
`;

export default HeaderStyled;
