import { Link, useLocation } from "@remix-run/react";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { ButtonLink } from "~/components/button/button-link";
import { ArrowBold, LinkedIn, Logo } from "~/icons";
import { Github } from "~/icons/github";
import * as classes from "./footer.css";

export const Footer: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <Link to="/">
          <Logo variant="light" title={t("go-to-homepage")} />
        </Link>
        <a
          href="https://www.linkedin.com/in/bulinskid/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn title={t("linkedin-link")} />
        </a>
        <a href="https://github.com/DBulinski" target="_blank" rel="noreferrer">
          <Github title={t("github-link")} />
        </a>
      </div>
      <div className={classes.right}>
        <ButtonLink className={classes.goToTop} to={location.pathname}>
          {t("go-to-top")}
          <ArrowBold role="presentation" />
        </ButtonLink>
        &copy; Dawid Buliński {new Date().getFullYear()}
      </div>
    </footer>
  );
};
