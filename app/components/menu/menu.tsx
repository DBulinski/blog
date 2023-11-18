import { useState } from "react";
import { createPortal } from "react-dom";
import { MenuIcon } from "~/icons";
import * as classes from "./menu.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={classes.button}>
        <MenuIcon title="Open menu" />
      </button>
      {isOpen &&
        createPortal(
          <div className={classes.menu}>
            Here will be menu{" "}
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>,
          document.body,
        )}
    </>
  );
};
