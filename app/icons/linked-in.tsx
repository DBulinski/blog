import { type FC, type SVGProps } from "react";

interface LinkedInProps extends SVGProps<SVGSVGElement> {
  title: string;
}

export const LinkedIn: FC<LinkedInProps> = ({ title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31.773}
    height={31.773}
    {...props}
  >
    <title>{title}</title>
    <path
      d="M15.886 0a15.886 15.886 0 1 0 15.887 15.886A15.888 15.888 0 0 0 15.886 0zM11.27 24.016H7.4v-11.64h3.87zm-1.934-13.23H9.31a2.017 2.017 0 1 1 .051-4.022 2.017 2.017 0 1 1-.026 4.022zm15.885 13.23h-3.869v-6.228c0-1.565-.56-2.632-1.96-2.632a2.118 2.118 0 0 0-1.985 1.415 2.65 2.65 0 0 0-.127.944v6.5h-3.869s.051-10.548 0-11.64h3.869v1.648a3.841 3.841 0 0 1 3.487-1.923c2.546 0 4.454 1.664 4.454 5.239zm0 0"
      style={{
        fill: "white",
      }}
    />
  </svg>
);
