import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const HeaderStyled = styled.header`
  padding-top: 1%;
  padding-bottom: 1%;
  .hamburger {
    position: relative;
    left: 14px;
  }
  .header-desktop {
    display: none;
  }

  .header-mobile-navigation {
    display: none;
  }
  .header-mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &__title {
      color: ${MainTheme.colors.mainGreen};
      font-size: clamp(1.5rem, 4vw + 1rem, 1.6rem);
      font-weight: bold;
    }
    &__navigation__item {
      padding-bottom: 2rem;
      font-size: 1.3rem;
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
      height: calc(100vh - 48px);
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
      display: block;
      height: 80px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      &__title {
        color: ${MainTheme.colors.mainGreen};
        font-size: clamp(1.6rem, 2vw + 1rem, 3.5rem);
        font-weight: bold;
      }
      &__title:hover {
        color: ${MainTheme.colors.mainWhite};
        transition: 0.3s;
        cursor: pointer;
      }
      &__navigation {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        &__item:hover {
          color: ${MainTheme.colors.mainGreen};
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }
  }
`;

export default HeaderStyled;
