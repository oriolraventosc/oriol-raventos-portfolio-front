import { GlobalStyles } from "@mui/styled-engine";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";
import Technologies from "./Technologies";
describe("Given a Technologies component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 title with the text 'technologies'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Technologies />
        </ThemeProvider>
      );

      const expectedTitle = screen.queryByRole("heading", {
        level: 3,
        name: "technologies",
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a text 'USING NOW:'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Technologies />
        </ThemeProvider>
      );

      const expectedText = screen.queryByRole("heading", {
        level: 5,
        name: "USING NOW:",
      });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
