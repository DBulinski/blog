import { type FC } from "react";
import { Navbar } from "~/components/navbar/navbar";
import * as classes from "./welcome-screen.css";

export const WelcomeScreen: FC = () => {
  return (
    <section className={classes.section}>
      <Navbar />
    </section>
  );
};
