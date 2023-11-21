import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const footer = style({
  color: vars.color.white,
  backgroundColor: vars.color.black,
  padding: `${vars.spacing.top} ${vars.spacing.left}`,
  display: "flex",
  justifyContent: "space-between",
});

export const icons = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.x4,
  alignItems: "center",
});

export const right = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const goToTop = style({
  alignSelf: "flex-end",
  rotate: "-90deg",
  transformOrigin: "bottom right",
  translate: "0 -18px",
  gap: vars.spacing.x2,
  display: "flex",
  alignItems: "center",
  transition: "translate 0.3s",

  ":hover": {
    translate: "0 -27px",
    transform: "none",
  },
});
