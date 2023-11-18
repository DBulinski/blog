import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  height: "100%",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  height: "100%",
});

globalStyle("*", {
  boxSizing: "border-box",
  fontFamily: ["Roboto", "sans-serif"],
  fontWeight: 300,
});
