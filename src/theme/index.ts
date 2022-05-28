import { createGlobalStyle, DefaultTheme } from "styled-components";

export enum AccentColours {
  green = "#b9e7de",
  violet = "#d1b4de",
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      bg: string;
      text: string;
      lightBg: string;
      green: AccentColours.green;
      violet: AccentColours.violet;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacings: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
    };
  }
}

export const theme: DefaultTheme = {
  palette: {
    bg: "#EDECE8",
    text: "#161614",
    lightBg: "#fff",
    green: AccentColours.green,
    violet: AccentColours.violet,
  },
  breakpoints: {
    mobile: `(min-width: 600px)`,
    tablet: `(min-width: 810px)`,
    desktop: `(min-width: 1200px)`,
  },
  spacings: {
    xxs: "0.5rem",
    xs: "1rem",
    s: "2rem",
    m: "4rem",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.text};
  }
`;
