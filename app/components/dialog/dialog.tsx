import {
  cloneElement,
  type FC,
  type ReactElement,
  type ReactNode,
  type KeyboardEvent,
  useRef,
} from "react";
import { type AriaDialogProps, useDialog } from "react-aria";
import { createPortal } from "react-dom";
import * as classes from "./dialog.css";
interface DialogProps extends AriaDialogProps {
  title?: ReactElement;
  children: ReactNode;
  onClose: () => void;
}

export const Dialog: FC<DialogProps> = ({
  title,
  children,
  onClose,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return createPortal(
    <div
      onKeyDown={handleKeyDown}
      {...dialogProps}
      className={classes.dialog}
      ref={ref}
    >
      {title && cloneElement(title, titleProps)}
      {children}
    </div>,
    document.body,
  );
};
