import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#ffe700",
    black: "#000",
    white: "#fff",
  },
  backgrounds: {
    gradient:
      "linear-gradient(50deg, rgba(0,0,0,1) 0%, rgba(99,101,102,1) 35%)",
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Orbitron', sans-serif",
  },
  spacing: {
    top: "90px",
    left: "10vw",
    right: "48px",
    x1: "4px",
    x2: "8px",
    x3: "16px",
    x4: "24px",
    x5: "32px",
    x6: "64px",
    x7: "96px",
    x8: "160px",
  },
});
