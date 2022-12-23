import { screen, render } from "@testing-library/react";
import { GlobalStyles } from "@mui/styled-engine";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a container with an accessible name 'loader'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Loader />
        </ThemeProvider>
      );

      const expectedContainer = screen.queryByLabelText("loader");

      expect(expectedContainer).toBeInTheDocument();
    });
  });
});
