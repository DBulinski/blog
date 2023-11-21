import { Link } from "@remix-run/react";
import { type FC, type ReactNode, useRef } from "react";
import { useLink, type AriaLinkOptions } from "react-aria";
import { ArrowRight } from "~/icons";
import * as classes from "./button.css";

interface ButtonLinkProps extends AriaLinkOptions {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "plain";
}

interface InternalLinkProps extends ButtonLinkProps {
  to: string;
  href?: never;
}

interface ExternalLinkProps extends ButtonLinkProps {
  to?: never;
  href: string;
}

export const ButtonLink: FC<InternalLinkProps | ExternalLinkProps> = ({
  children,
  className = "",
  variant = "plain",
  href,
  to,
  ...props
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink({ ...props, href: href ?? to }, ref);

  if (href) {
    return (
      <a
        href={href}
        ref={ref}
        {...linkProps}
        className={`${classes[variant]} ${className}`.trim()}
      >
        {children} {variant === "primary" && <ArrowRight role="presentation" />}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        ref={ref}
        {...linkProps}
        className={`${classes[variant]} ${className}`.trim()}
      >
        {children} {variant === "primary" && <ArrowRight role="presentation" />}
      </Link>
    );
  }

  throw new Error("Either 'to' or 'href' must be specified");
};
