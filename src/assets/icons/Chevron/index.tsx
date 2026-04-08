import { SVGProps } from "react";

export const Chevron = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const { width, height, fill, rotate, className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={className}
    >
      <g opacity="0.9">
        <path
          d="M8.59 16.4064L13.17 12L8.59 7.59359L10 6.23999L16 12L10 17.76L8.59 16.4064Z"
          fill={fill}
        />
        <path
          d="M8.59 16.4064L13.17 12L8.59 7.59359L10 6.23999L16 12L10 17.76L8.59 16.4064Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
