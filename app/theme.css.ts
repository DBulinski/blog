import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#ffe700",
    black: "#000",
    white: "#fff",
  },
  spacing: {
    top: "90px",
    left: "10vw",
    right: "48px",
  },
});
