import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const section = style({
  position: "relative",
  backgroundImage: vars.backgrounds.gradient,
  minHeight: "100dvh",
  paddingLeft: vars.spacing.left,
  paddingTop: vars.spacing.top,
  paddingRight: vars.spacing.right,

  "@media": {
    "screen and (min-width: 1024px)": {
      width: "80%",
    },
  },
});

export const heading = style({
  fontFamily: vars.fonts.secondary,
  fontSize: "70px",
  marginTop: "20vh",

  ":first-letter": {
    color: vars.color.white,
  },
});

export const introduction = style({
  fontSize: "26px",
});

export const introductionNewLine = style({
  display: "inline",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "block",
    },
  },
});

export const primaryColor = style({
  color: vars.color.primary,
});

export const decorationText = style({
  display: "none",

  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
      alignItems: "center",
      gap: vars.spacing.x5,
      fontFamily: vars.fonts.secondary,
      fontSize: "24px",
      fontWeight: 800,
      transform: "translate(70%, -20%)",
    },
  },
});

export const decorationBig = style({
  fontSize: "100px",
});

export const scrollDown = style({
  display: "none",
  "@media": {
    "screen and (min-width: 1024px)": {
      rotate: "90deg",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      gap: vars.spacing.x3,
      transformOrigin: "bottom right",
      bottom: "10px",
      right: 0,
      padding: `${vars.spacing.x4}`,
      transition: "translate 0.3s",

      ":hover": {
        translate: "0 10px",
        transform: "none",
      },
    },
  },
});
