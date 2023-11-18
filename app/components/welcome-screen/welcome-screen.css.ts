import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const section = style({
  backgroundImage: vars.backgrounds.gradient,
  height: "100dvh",

  "@media": {
    "screen and (min-width: 1024px)": {
      width: "80%",
    },
  },
});
