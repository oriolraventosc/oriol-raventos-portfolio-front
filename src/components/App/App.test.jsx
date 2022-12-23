import TestRenderer from "react-test-renderer";
import App from "./App";
import { GlobalStyles } from "@mui/styled-engine";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the homepage", () => {
      const expected = TestRenderer.create(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      );

      expect(expected).toMatchSnapshot();
    });
  });
});
