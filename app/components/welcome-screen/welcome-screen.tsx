import { type FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "~/components/button/button";
import { ButtonLink } from "~/components/button/button-link";
import { Navbar } from "~/components/navbar/navbar";
import { ArrowRight } from "~/icons";
import * as classes from "./welcome-screen.css";

export const WelcomeScreen: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={classes.section}>
      <Navbar />
      <h1 className={classes.heading}>{t("hello")}</h1>
      <p className={classes.introduction}>
        <Trans t={t} i18nKey="introduction">
          First <span className={classes.primaryColor}>Name</span> rest
          <div className={classes.introductionNewLine}>new line</div>
        </Trans>
      </p>
      <p className={classes.decorationText} role="presentation">
        <span className={classes.decorationBig}>&#123;(</span>
        setState(prevState ={">"} prevState * 2)
      </p>
      <ButtonLink to="/blog" variant="primary">
        {t("go-to-blog")}
      </ButtonLink>
      <ButtonLink
        href="#latest-posts"
        variant="plain"
        className={classes.scrollDown}
      >
        scroll down <ArrowRight />
      </ButtonLink>
    </section>
  );
};
