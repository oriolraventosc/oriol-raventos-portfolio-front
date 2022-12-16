import About from "./About";
import { screen, render } from "@testing-library/react";
import { GlobalStyles } from "@mui/styled-engine";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

describe("Given a About component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'about me'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <About />
        </ThemeProvider>
      );

      const expectedParagraphWord = screen.getByText("about");
      const expectedSpanWord = screen.getByText("me");

      expect(expectedParagraphWord).toBeInTheDocument();
      expect(expectedSpanWord).toBeInTheDocument();
    });

    test("Then it should show an introduction paragraph", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <About />
        </ThemeProvider>
      );

      const expectedIntroductionParagraph = screen.queryByLabelText(
        "introduction about oriol raventós"
      );

      expect(expectedIntroductionParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph about my past professional experiences", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <About />
        </ThemeProvider>
      );

      const expectedProfessionalParagraph = screen.queryByLabelText(
        "past proffesional experiences"
      );

      expect(expectedProfessionalParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph about my free time activities", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <About />
        </ThemeProvider>
      );

      const expectedFreeTimeParagraph = screen.queryByLabelText(
        "free time activities"
      );

      expect(expectedFreeTimeParagraph).toBeInTheDocument();
    });

    test("Then it should show a image", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <About />
        </ThemeProvider>
      );

      const expectedImage = screen.queryByRole("img", {
        name: "oriol raventós Front End Developer",
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
