import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const HeaderStyled = styled.header`
  .header-desktop {
    display: none;
  }

  .header-mobile-navigation {
    display: none;
  }
  .header-mobile {
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &__title {
      color: ${MainTheme.colors.mainGreen};
      font-size: 1.5rem;
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
        font-size: 2rem;
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
