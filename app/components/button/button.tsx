import { mergeRefs } from "@react-aria/utils";
import { forwardRef, type ReactNode, useRef } from "react";
import { useButton, type AriaButtonProps } from "react-aria";
import * as classes from "./button.css";

interface ButtonProps extends AriaButtonProps {
  className?: string;
  children: ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, buttonRef);

    return (
      <button
        ref={mergeRefs(buttonRef, ref)}
        {...buttonProps}
        className={`${classes.button} ${className}`.trim()}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
