import { SVGProps } from "react";

export const Notification = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const { width, height, fill, className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.2744 16.9355C28.1027 16.9357 28.7744 17.6072 28.7744 18.4355V20.0811C28.7742 20.9092 28.1026 21.5809 27.2744 21.5811H5.5C4.67171 21.5811 4.00022 20.9093 4 20.0811V18.4355C4 17.6071 4.67157 16.9355 5.5 16.9355H8.64551L9.74902 7.00293C10.0023 4.72406 11.9288 3 14.2217 3H18.5527C20.8457 3 22.7721 4.72405 23.0254 7.00293L24.1289 16.9355H27.2744Z"
        fill={fill}
      />
      <rect
        opacity="0.3"
        x="13.2903"
        y="23.129"
        width="6.19355"
        height="6.19355"
        rx="2.25"
        fill="#FF0000"
      />
    </svg>
  );
};
