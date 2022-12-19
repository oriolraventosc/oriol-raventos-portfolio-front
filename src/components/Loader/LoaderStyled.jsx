import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const LoaderStyled = styled.section`
  z-index: 8;
  top: 0;
  width: calc(100vw - 2rem);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  @media (min-width: 800px) {
    width: calc(100vw - 6rem);
  }
  background-color: ${MainTheme.colors.mainGrey};
  .loader {
    color: rgb(172, 229, 10);
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 78px;
    opacity: 0.8;
  }
  .loader:before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }
  .loader:after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }

  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;
export default LoaderStyled;
