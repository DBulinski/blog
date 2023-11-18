import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const dialog = style({
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: vars.color.white,

  "@media": {
    "screen and (min-width: 1024px)": {
      width: "80%",
    },
  },
});
