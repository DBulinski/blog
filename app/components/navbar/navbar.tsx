import { Link } from "@remix-run/react";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "~/components/menu/menu";
import { Logo } from "~/icons";
import * as classes from "./navbar.css";

export const Navbar: FC = () => {
  const { t } = useTranslation();
  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <Logo variant="dark" title={t("go-to-homepage")} />
      </Link>
      <Menu />
    </nav>
  );
};
