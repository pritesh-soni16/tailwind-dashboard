import { SVGProps } from "react";

export const Error = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const { width, height, fill, className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.8125 14.5625C11.8125 15.793 10.8281 16.75 9.625 16.75C8.39453 16.75 7.4375 15.793 7.4375 14.5625C7.4375 13.3594 8.39453 12.375 9.625 12.375C10.8281 12.375 11.8125 13.3594 11.8125 14.5625ZM7.68359 3.46094C7.65625 3.07812 7.95703 2.75 8.33984 2.75H10.8828C11.2656 2.75 11.5664 3.07812 11.5391 3.46094L11.1836 10.8984C11.1562 11.2266 10.8555 11.5 10.5273 11.5H8.69531C8.36719 11.5 8.06641 11.2266 8.03906 10.8984L7.68359 3.46094Z"
        fill={fill}
      />
    </svg>
  );
};
