import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import MainTheme from "./ThemeStyles";

const GlobalStyles = createGlobalStyle`
::selection {
  background-color: ${MainTheme.colors.mainGreen};
  color: ${MainTheme.colors.mainGrey}
}
body {
  font-family: "Roboto";
}
html {
background-color: #1F1F20;
}
a {
  text-decoration: none;
  color: ${MainTheme.colors.mainWhite}
  
}
@media (min-width: 800px) {
    a {
      font-size: clamp(1rem, 1vw + 0.5rem, 3.5rem);
    }
  }
body {
  margin: 0;
  padding-right: 1rem;
  padding-left: 1rem;
  @media (min-width: 426px) {
  padding-right: 1rem;
  padding-left: 1rem;
  }
  @media (min-width: 800px) {
  padding-right: 4rem;
  padding-left: 4rem;
  }
}
ul {
  list-style: none;
}
li {
  list-style: none;
}
.next-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.next-button-icon {
  color: #ACE50A;
}
.next-button-icon:hover {
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}
`;

export default GlobalStyles;
