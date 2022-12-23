import Header from "./Header";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import MainTheme from "../../styles/ThemeStyles";
import GlobalStyles from "../../styles/globalStyles";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'oriol-raventos-portfolio-top'", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );
      const expectedLinkLabel = "oriol-raventos-portfolio-top";

      const expectedLink = screen.queryByRole("link", {
        name: expectedLinkLabel,
      });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show a hamburger button", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );

      const expectedHamburgerButton = screen.queryByRole("button");

      expect(expectedHamburgerButton).toBeInTheDocument();
    });

    test("Then when the hamburger button is clicked it should show a menu", async () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );
      const expectedMenuLabelText = "portfolio-menu";

      const hamburgerButton = screen.queryByRole("button");
      const expectedMenu = screen.queryByLabelText(expectedMenuLabelText);
      await userEvent.click(hamburgerButton);

      expect(expectedMenu).toBeInTheDocument();
    });

    test("Then when clicked the hamburger link 'about me' must close the menu", async () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );

      const hamburgerButton = screen.queryByRole("button");
      await userEvent.click(hamburgerButton);

      const expectedMenuLink = "about me";
      const link = screen.queryByRole("link", {
        name: expectedMenuLink,
      });
      await userEvent.click(hamburgerButton);
      const expectedMainMenu = screen.queryByLabelText("main-menu");
      await userEvent.click(link);

      expect(expectedMainMenu).toBeInTheDocument();
    });

    test("Then when clicked the hamburger and clicked again it should close the menu", async () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );

      const hamburgerButton = screen.queryByRole("button");
      await userEvent.click(hamburgerButton);

      const closeHamburgerButton = screen.queryByRole("button", {
        name: "toggle-menu-close",
      });
      await userEvent.click(closeHamburgerButton);
      const expectedMainMenu = screen.queryByLabelText("main-menu");

      expect(expectedMainMenu).toBeInTheDocument();
    });

    test("Then it should show the desktop menu", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );
      const expectedMenuLabelText = "portfolio-desktop-menu";

      const expectedMenu = screen.queryByLabelText(expectedMenuLabelText);

      expect(expectedMenu).toBeInTheDocument();
    });

    test("Then if a scroll action is called then it should change the className of the menu", () => {
      render(
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );

      window.scrollTo();
      const expectedHeader = screen.queryByLabelText("main-menu");

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
