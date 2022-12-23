import { screen, render } from "@testing-library/react";
import { GlobalStyles } from "@mui/styled-engine";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

jest.mock("../../utils/FormFetch/baseFetch", () => {
  return () => ({
    addContact: mockSubmit,
  });
});

describe("Given a ContactForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 title with the text 'contact me'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <ContactForm />
        </ThemeProvider>
      );

      const expectedTitle = screen.queryByRole("heading", {
        level: 2,
        name: "contact me",
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'SUBMIT'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <ContactForm />
        </ThemeProvider>
      );

      const expectedButton = screen.queryByRole("button", {
        name: "SUBMIT",
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show three inputs and a textarea", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <ContactForm />
        </ThemeProvider>
      );

      const expectedNameInput = screen.queryByLabelText("name");
      const expectedEmailInput = screen.queryByLabelText("email");
      const expectedTelephoneInput = screen.queryByLabelText("telephone");
      const expectedMessageTextarea = screen.queryByLabelText("message");

      expect(expectedNameInput).toBeInTheDocument();
      expect(expectedEmailInput).toBeInTheDocument();
      expect(expectedTelephoneInput).toBeInTheDocument();
      expect(expectedMessageTextarea).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the form is submitted", () => {
    test("Then it should call the mockSubmit action", async () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <ContactForm />
        </ThemeProvider>
      );

      const expectedNameInput = screen.queryByLabelText("name");
      const expectedEmailInput = screen.queryByLabelText("email");
      const expectedTelephoneInput = screen.queryByLabelText("telephone");
      const expectedMessageTextarea = screen.queryByLabelText("message");
      const submitButton = screen.queryByRole("button", {
        name: "SUBMIT",
      });

      await userEvent.type(expectedNameInput, "John");
      await userEvent.type(expectedEmailInput, "john@gmail.com");
      await userEvent.type(expectedTelephoneInput, 934112299);
      await userEvent.type(expectedMessageTextarea, "Expected message text");
      await userEvent.click(submitButton);
    });
  });
});
