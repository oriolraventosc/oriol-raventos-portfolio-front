import styled from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

const ContactFormStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (min-width: 800px) {
    margin-top: 10rem;
  }
  h2 {
    color: ${MainTheme.colors.mainWhite};
    padding-bottom: 1.5rem;
    margin: 0;
    text-align: center;
  }
  button {
    color: ${MainTheme.colors.mainWhite};
    border-radius: ${MainTheme.borderRadius};
    border: 1.5px solid #ace50a;
    background-color: ${MainTheme.colors.mainGrey};
    padding-top: 0.7rem;
    margin-bottom: 1rem;
    padding-bottom: 0.7rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 15rem;
    @media (min-width: 426px) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    @media (min-width: 800px) {
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }
  button:hover {
    box-shadow: inset 300px 0 0 0 #fff;
    border-color: ${MainTheme.colors.mainWhite};
    color: ${MainTheme.colors.mainGrey};
    cursor: pointer;
    transition: 0.3s;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .alert {
    background-color: ${MainTheme.colors.mainGreen};
    text-align: center;
    font-size: var(--step-1);
    width: 15rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
    color: ${MainTheme.colors.mainGrey};
    @media (min-width: 426px) {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: var(--step-0);
      width: 20rem;
      @media (min-width: 800px) {
        width: 30rem;
      }
      @media (min-width: 2000px) {
        width: 35rem;
      }
    }
    p {
      margin: 0;
      padding-right: 5px;
      padding-left: 5px;
      font-size: clamp(0.88rem, calc(0.71rem + 0.8vw), 2rem);
      @media (min-width: 426px) {
        font-size: clamp(0.66rem, calc(0.54rem + 0.6vw), 1.5rem);
      }
    }
  }
`;

export default ContactFormStyled;
