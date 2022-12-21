import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const FooterStyled = styled.section`
  margin-top: 5rem;
  p {
    text-align: center;
    color: ${MainTheme.colors.mainWhite};
    margin: 0;
  }
  .footer-icons {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 1rem;
  }
  .icon {
    color: ${MainTheme.colors.mainWhite};
  }
  .icon:hover {
    color: ${MainTheme.colors.mainGreen};
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.3s;
  }
`;

export default FooterStyled;
