import { createGlobalStyle, DefaultTheme } from "styled-components";

export enum AccentColours {
  teal = "#b9e7de",
  violet = "#d1b4de",
  orange = "#FFC999",
  blue = "#9ECEE6",
  green = "#CDE4B4",
  pink = "#FFADAD",
  yellow = "#fae97a",
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      bg: string;
      text: string;
      lightBg: string;
      darkOrange: string;
      teal: AccentColours.teal;
      violet: AccentColours.violet;
      orange: AccentColours.orange;
      blue: AccentColours.blue;
      green: AccentColours.green;
      pink: AccentColours.pink;
      yellow: AccentColours.yellow;
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
    darkOrange: "#f2a71b",
    teal: AccentColours.teal,
    violet: AccentColours.violet,
    orange: AccentColours.orange,
    blue: AccentColours.blue,
    green: AccentColours.green,
    pink: AccentColours.pink,
    yellow: AccentColours.yellow,
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
