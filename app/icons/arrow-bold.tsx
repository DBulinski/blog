import { type FC, type SVGProps } from "react";

export const ArrowBold: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    style={{ rotate: "90deg" }}
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={11.115}
    {...props}
  >
    <path
      d="M11.115 11.76 18 18.63l6.885-6.87L27 13.875l-9 9-9-9z"
      data-name="Icon material-keyboard-arrow-down"
      style={{
        fill: "#fff",
      }}
      transform="rotate(180 13.5 11.438)"
    />
  </svg>
);
