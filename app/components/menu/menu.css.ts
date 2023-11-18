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
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: vars.color.white,
});
