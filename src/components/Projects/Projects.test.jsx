import { screen, render } from "@testing-library/react";
import { GlobalStyles } from "@mui/styled-engine";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";
import Projects from "./Projects";

describe("Given a Projects component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 title with the text 'projects'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Projects />
        </ThemeProvider>
      );

      const expectedTitle = screen.queryByRole("heading", {
        level: 2,
        name: "projects",
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a container with an accessible name 'projects list'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Projects />
        </ThemeProvider>
      );

      const expectedContainer = screen.getByLabelText("projects list");

      expect(expectedContainer).toBeInTheDocument();
    });
  });
});
