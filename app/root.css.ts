import { globalStyle } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

globalStyle("html", {
  height: "100%",
  scrollBehavior: "smooth",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  height: "100%",
  width: "100%",
  overflowX: "hidden",
  fontFamily: vars.fonts.primary,
  fontWeight: 300,
});

globalStyle("button", {
  fontFamily: vars.fonts.primary,
  fontWeight: 300,
});

globalStyle("*", {
  boxSizing: "border-box",
});
