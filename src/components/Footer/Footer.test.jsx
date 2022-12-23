import Footer from "./Footer";
import { screen, render } from "@testing-library/react";
import { GlobalStyles } from "@mui/styled-engine";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a paragraph with the text 'created by oriol raventós'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Footer />
        </ThemeProvider>
      );

      const expectedParagraph = screen.queryByLabelText(
        "created by oriol raventós"
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name 'oriol raventós github profile'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Footer />
        </ThemeProvider>
      );

      const expectedLink = screen.queryByRole("link", {
        name: "oriol raventós github profile",
      });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name 'oriol raventós linkedin profile'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Footer />
        </ThemeProvider>
      );

      const expectedLink = screen.queryByRole("link", {
        name: "oriol raventós linkedin profile",
      });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name 'oriol raventós email'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Footer />
        </ThemeProvider>
      );

      const expectedLink = screen.queryByRole("link", {
        name: "oriol raventós email",
      });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name 'oriol raventós instagram profile'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Footer />
        </ThemeProvider>
      );

      const expectedLink = screen.queryByRole("link", {
        name: "oriol raventós instagram profile",
      });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name 'oriol raventós telephone number'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Footer />
        </ThemeProvider>
      );

      const expectedLink = screen.queryByRole("link", {
        name: "oriol raventós telephone number",
      });

      expect(expectedLink).toBeInTheDocument();
    });
  });
});
