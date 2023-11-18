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
  fontFamily: ["Roboto", "sans-serif"],
  fontWeight: 300,
});
