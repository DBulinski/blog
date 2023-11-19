import { Link } from "@remix-run/react";
import { useRef, useState, type FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "~/components/button/button";
import { Dialog } from "~/components/dialog/dialog";
import { CloseIcon, Logo, MenuIcon } from "~/icons";
import * as classes from "./menu.css";

export const Menu: FC = () => {
  const { t } = useTranslation();
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
        <MenuIcon title={t("open-menu")} />
      </Button>
      {isOpen && (
        <Dialog
          title={
            <header className={classes.menuHeader}>
              <Logo variant="dark" title="" role="presentation" />
              <Button onPress={handleClose}>
                <CloseIcon title={t("close-menu")} />
              </Button>
            </header>
          }
          className={classes.menu}
          onClose={handleClose}
        >
          <MenuList />
        </Dialog>
      )}
    </>
  );
};

const MenuList: FC = () => {
  const { t } = useTranslation();
  return (
    <ul className={classes.menuList}>
      <li>
        <Link className={classes.menuListItem} to="/">
          {t("menu-home")}
        </Link>
      </li>
      <li>
        <Link className={classes.menuListItem} to="/blog">
          <span className={classes.primary}>{t("menu-blog")}</span>
        </Link>
      </li>
      <li>
        <Link className={classes.menuListItem} to="/about-me">
          <Trans t={t} i18nKey="menu-about-me">
            <span className={classes.white}>about</span>
            <span className={classes.primary}>me</span>
          </Trans>
        </Link>
      </li>
      <li>
        <Link className={classes.menuListItem} to="/contact">
          {t("menu-contact")}
        </Link>
      </li>
    </ul>
  );
};
