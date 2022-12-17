import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import MainTheme from "./ThemeStyles";

const GlobalStyles = createGlobalStyle`
::selection {
  background-color: ${MainTheme.colors.mainGreen};
  color: ${MainTheme.colors.mainGrey}
}
strong {
  color: ${MainTheme.colors.mainGreen};
}
:root {
  --step--2: clamp(0.49rem, calc(0.40rem + 0.45vw), 1.13rem);
  --step--1: clamp(0.66rem, calc(0.54rem + 0.60vw), 1.50rem);
  --step-0: clamp(0.88rem, calc(0.71rem + 0.80vw), 2.00rem);
  --step-1: clamp(1.17rem, calc(0.95rem + 1.07vw), 2.67rem);
  --step-2: clamp(1.56rem, calc(1.27rem + 1.43vw), 3.55rem);
  --step-3: clamp(2.07rem, calc(1.69rem + 1.90vw), 4.74rem);
  --step-4: clamp(2.76rem, calc(2.26rem + 2.54vw), 6.31rem);
  --step-5: clamp(3.68rem, calc(3.01rem + 3.38vw), 8.42rem);
}
h1 {
  font-size: var(--step-5);
}
h2 {
  font-size: var(--step-4);
}
h3 {
  font-size: var(--step-2);
  @media (min-width: 800px) {
    font-size: var(--step-3);
  }
}
h4 {
  font-size: var(--step-2);
}
h5 {
  font-size: var(--step-0);
}
h6 {
  font-size: var(--step-0);
}
p {
  font-size: var(--step-0);
  @media (min-width: 426px) {

    font-size: var(--step-0);
  }
}
span {
  font-size: var(--step-2);
  @media (min-width: 426px) {
    font-size: var(--step-2);
  }
  @media (min-width: 800px) {
    font-size: var(--step-2);
  }
}
button {
  font-size: var(--step-0);
  @media (min-width: 426px) {
    font-size: var(--step-0);
  }
  @media (min-width: 800px) {
    font-size: var(--step-0);
  }
}
body {
  font-family: "Roboto";
}
html {
background-color: #1F1F20;
}
a {
  text-decoration: none;
  color: ${MainTheme.colors.mainWhite};
  font-size: var(--step-1)
  
}
@media (min-width: 800px) {
  a {

    font-size: var(--step-0);
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
