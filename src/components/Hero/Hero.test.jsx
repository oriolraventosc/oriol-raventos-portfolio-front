import { GlobalStyles } from "@mui/styled-engine";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";
import Hero from "./Hero";

describe("Given a Hero component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a paragraph with the text 'Hello.'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Hero />
        </ThemeProvider>
      );

      const expectedParagraph = screen.getByText("Hello.");

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a heading level 1 title with the text 'oriol raventos.'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Hero />
        </ThemeProvider>
      );

      const expectedTitle = screen.queryByRole("heading", {
        level: 1,
        name: "oriol raventós.",
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'front end developer'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Hero />
        </ThemeProvider>
      );

      const expectedParagraph = screen.queryByLabelText("front end developer");

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Let's get in touch'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Hero />
        </ThemeProvider>
      );

      const expectedButton = screen.queryByRole("button", {
        name: "Let's get in touch",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
