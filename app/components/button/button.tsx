import { mergeRefs } from "@react-aria/utils";
import { forwardRef, type ReactNode, useRef } from "react";
import { useButton, type AriaButtonProps } from "react-aria";
import { ArrowRight } from "~/icons";
import * as classes from "./button.css";

interface ButtonProps extends AriaButtonProps {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "plain";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", variant = "plain", ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, buttonRef);

    return (
      <button
        ref={mergeRefs(buttonRef, ref)}
        {...buttonProps}
        className={`${classes[variant]} ${className}`.trim()}
      >
        {children} {variant === "primary" && <ArrowRight role="presentation" />}
      </button>
    );
  },
);

Button.displayName = "Button";
