import { useRef, useState } from "react";
import { Button } from "~/components/button/button";
import { Dialog } from "~/components/dialog/dialog";
import { MenuIcon } from "~/icons";
import * as classes from "./menu.css";

export const Menu = () => {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <Button
        ref={menuButtonRef}
        onPress={() => setIsOpen(true)}
        className={classes.button}
      >
        <MenuIcon title="Open menu" />
      </Button>
      {isOpen && (
        <Dialog onClose={handleClose}>
          <Button onPress={handleClose}>Close</Button>
        </Dialog>
      )}
    </>
  );
};
