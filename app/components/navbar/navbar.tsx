import { Link } from "@remix-run/react";
import { type FC, useState } from "react";
import { Menu } from "~/components/menu/menu";
import { Logo } from "~/icons";
import * as classes from "./navbar.css";

export const Navbar: FC = () => {
  return (
    <nav className={classes.navbar}>
      <Link to="/">
        <Logo variant="dark" title="Go to homepage" />
      </Link>
      <Menu />
    </nav>
  );
};
