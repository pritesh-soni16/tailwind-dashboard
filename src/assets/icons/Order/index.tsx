import { SVGProps } from "react";

export const Order = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const { width, height, fill, className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12.3165L16.9005 19.7646C17.0394 19.8448 17.1851 19.9027 17.3333 19.9395V34.3847L4.92006 27.0385C4.34978 26.701 4 26.0876 4 25.4249V12.3165ZM34 12.1185V25.4249C34 26.0876 33.6502 26.701 33.0799 27.0385L20.6667 34.3847V19.8129C20.6969 19.7978 20.7269 19.7817 20.7566 19.7646L34 12.1185Z"
        fill={fill}
      />
      <path
        opacity="0.499209"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.40521 8.70142C4.56279 8.50244 4.76168 8.33426 4.99355 8.21076L18.1186 1.2201C18.6695 0.926633 19.3304 0.926633 19.8814 1.2201L33.0064 8.21076C33.1852 8.30596 33.3443 8.42771 33.48 8.56966L19.0899 16.8778C18.9953 16.9325 18.908 16.995 18.8285 17.064C18.749 16.995 18.6618 16.9325 18.5671 16.8778L4.40521 8.70142Z"
        fill={fill}
      />
    </svg>
  );
};
