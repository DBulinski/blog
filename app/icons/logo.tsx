import { type FC, type SVGProps } from "react";
import { vars } from "~/theme.css";

interface LogoProps extends SVGProps<SVGSVGElement> {
  title: string;
  variant?: "dark" | "light";
}

export const Logo: FC<LogoProps> = ({ title, variant = "dark", ...props }) => {
  const letterColour =
    variant === "dark" ? vars.color.primary : vars.color.white;
  const signColour = variant === "dark" ? vars.color.black : vars.color.primary;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={97.189}
      height={36.777}
      {...props}
    >
      <title>{title}</title>
      <g data-name="Group 4">
        <path
          d="m215.576 60.819 11.446-8.471h3.76v1.942l-10.661 7.892 10.661 7.893v1.942h-3.76l-11.446-8.43z"
          data-name="Path 28"
          style={{
            fill: signColour,
          }}
          transform="translate(-215.576 -41.563)"
        />
        <path
          d="M298.646 57.558V56.4l-1.57 1.2h-10.125l-4.173-3.512v-12.77l4.173-3.471h10.289l1.4 1.24V28.8h3.8v28.758zm0-13.43-2.19-2.438h-8.14l-1.736 1.446v9.132l1.736 1.446h8.306l2.025-1.942z"
          data-name="Path 29"
          style={{
            fill: letterColour,
          }}
          transform="translate(-264.265 -24.5)"
        />
        <path
          d="m378.009 18.734-3.926 27.893-4.256 3.347-2.149-3.14 3.016-2.4 3.926-27.893 4.256-3.347 2.149 3.182z"
          data-name="Path 30"
          style={{
            fill: signColour,
          }}
          transform="translate(-325.778 -13.197)"
        />
        <path
          d="M445.167 57.273h-9.917l-1.818-1.2v1.2h-3.8V28.347h3.8V38.76l1.4-1.24h10.331l4.173 3.512v12.729zm.413-14.422L443.8 41.4h-8.141l-2.231 2.4v7.645l2.025 1.942h8.347l1.78-1.487z"
          data-name="Path 31"
          style={{
            fill: letterColour,
          }}
          transform="translate(-370.663 -24.174)"
        />
        <path
          d="M516.94 72.018h-3.76v-1.943l10.661-7.893-10.661-7.892v-1.942h3.76l11.446 8.471v2.769z"
          data-name="Path 32"
          style={{
            fill: signColour,
          }}
          transform="translate(-431.197 -41.563)"
        />
      </g>
    </svg>
  );
};
