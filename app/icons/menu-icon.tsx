import { type FC, type SVGProps } from "react";

interface MenuIconProps extends SVGProps<SVGSVGElement> {
  title: string;
}

export const MenuIcon: FC<MenuIconProps> = ({ title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35.661}
    height={23.922}
    data-name="menu bar"
    {...props}
  >
    <title>{title}</title>
    <path
      d="M3710.851 122.7v4.518h-35.661l4.272-4.518z"
      data-name="Path 3"
      style={{
        fill: "currentcolor",
      }}
      transform="translate(-3675.19 -122.702)"
    />
    <path
      d="M35.661 0v4.518H0L4.272 0z"
      data-name="Path 7"
      style={{
        fill: "currentcolor",
      }}
      transform="rotate(180 17.83 11.961)"
    />
    <path
      d="M3710.851 107v4.561h-35.661V107z"
      data-name="Path 6"
      style={{
        fill: "currentcolor",
      }}
      transform="translate(-3675.19 -97.298)"
    />
  </svg>
);
