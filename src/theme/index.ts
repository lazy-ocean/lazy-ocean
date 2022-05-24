import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      bg: string;
      text: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}

export const theme: DefaultTheme = {
  palette: {
    bg: "#EDECE8",
    text: "161614",
  },
  breakpoints: {
    mobile: `(min-width: 600px)`,
    tablet: `(min-width: 810px)`,
    desktop: `(min-width: 1200px)`,
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.text};
  }
`;
