import { style } from "@vanilla-extract/css";

export const section = style({
  backgroundImage:
    "linear-gradient(50deg, rgba(0,0,0,1) 0%, rgba(99,101,102,1) 35%)",
  height: "100dvh",

  "@media": {
    "screen and (min-width: 1024px)": {
      width: "80%",
    },
  },
});
