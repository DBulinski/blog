import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const button = style({
  background: "none",
  border: "none",
  margin: 0,
  padding: 0,
  color: vars.color.white,
  cursor: "pointer",
});

export const menu = style({
  background: vars.backgrounds.gradient,
});

export const menuHeader = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  paddingLeft: vars.spacing.left,
  paddingTop: vars.spacing.top,
  paddingRight: vars.spacing.right,
  color: vars.color.white,
});

export const menuList = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontFamily: "Orbitron, sans-serif",
  fontWeight: 800,
  textAlign: "center",
  margin: 0,
  padding: 0,
  paddingTop: vars.spacing.x7,
  gap: vars.spacing.x5,

  "@media": {
    "screen and (min-width: 1024px)": {
      paddingTop: vars.spacing.x4,
      gap: vars.spacing.x4,
    },
  },
});

export const menuListItem = style({
  color: vars.color.black,
  textDecoration: "none",
  fontSize: "10vmin",
  transition: "color 0.3s",

  ":hover": {
    color: vars.color.white,
  },
});

export const primary = style({
  color: vars.color.primary,
  transition: "color 0.3s",

  get selectors() {
    return {
      [`${menuListItem}:hover &`]: {
        color: vars.color.white,
      },
    };
  },
});

export const white = style({
  color: vars.color.white,
  transition: "color 0.3s",

  get selectors() {
    return {
      [`${menuListItem}:hover &`]: {
        color: vars.color.primary,
      },
    };
  },
});
