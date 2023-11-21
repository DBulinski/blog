import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const baseStyles: ComplexStyleRule = {
  margin: 0,
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  width: "max-content",
};

export const plain = style({
  ...baseStyles,
  transition: "0.3s transform",

  ":hover": {
    transform: "scale(1.2)",
  },
});

export const primary = style({
  ...baseStyles,
  fontSize: "1.1rem",
  padding: `${vars.spacing.x3} ${vars.spacing.x4}`,
  border: vars.borders.action,
  display: "flex",
  gap: vars.spacing.x2,
  alignItems: "center",
  textTransform: "lowercase",
});
