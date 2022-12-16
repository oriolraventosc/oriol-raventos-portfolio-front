import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import MainTheme from "./ThemeStyles";

const GlobalStyles = createGlobalStyle`
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
      font-size: 1.2rem;
    }
  }
body {
  margin: 0;
  padding-right: 1rem;
  padding-left: 1rem;
  @media (min-width: 426px) {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  }
  @media (min-width: 800px) {
  padding-right: 3rem;
  padding-left: 3rem;
  }
}
ul {
  list-style: none;
}
li {
  list-style: none;
}
`;

export default GlobalStyles;
