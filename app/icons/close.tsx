import { type FC, type SVGProps } from "react";

interface CloseIconProps extends SVGProps<SVGSVGElement> {
  title: string;
}

export const CloseIcon: FC<CloseIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27.173}
    height={26.922}
    {...props}
  >
    <path
      data-name="Path 33"
      d="m143.873 350.712-8.473 9.6 8.473 9.6v2.362h-2.989l-9.1-10.252-9.1 10.252H119.7v-2.364l8.473-9.6-8.473-9.6v-2.36h2.989l9.1 10.3 9.1-10.3h2.989z"
      transform="translate(-118.2 -346.85)"
      style={{
        fill: "#fff",
        stroke: "#fff",
        strokeWidth: "3px",
      }}
    />
  </svg>
);
