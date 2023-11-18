import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const navbar = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  paddingLeft: vars.spacing.left,
  paddingTop: vars.spacing.top,
  paddingRight: vars.spacing.right,
});
