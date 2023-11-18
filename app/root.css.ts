import { globalStyle } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

globalStyle("html", {
  height: "100%",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  height: "100%",
  fontFamily: vars.fonts.primary,
  fontWeight: 300,
});

globalStyle("*", {
  boxSizing: "border-box",
});
