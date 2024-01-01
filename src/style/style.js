import { theme as chakraTheme, extendBaseTheme } from "@chakra-ui/react";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/500.css";
import "@fontsource/noto-sans-kr/600.css";
import "@fontsource/noto-sans-kr/700.css";

const { Card, Button, Input } = chakraTheme.components;

const components = { Card, Button, Input };
const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const styles = {
  global: {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    body: {
      width: "100%",
    },
    "ul,ol,li": {
      listStyle: "none",
    },
  },
};

export const _theme = extendBaseTheme({
  components,
  styles,
  fonts: {
    heading: `'Noto Sans KR', sans-serif`,
    body: `'Noto Sans KR', sans-serif`,
  },
  breakpoints,
});
