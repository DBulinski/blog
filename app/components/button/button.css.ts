import { style } from "@vanilla-extract/css";

export const button = style({
  margin: 0,
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  transition: "0.3s transform",

  ":hover": {
    transform: "scale(1.2)",
  },
});
