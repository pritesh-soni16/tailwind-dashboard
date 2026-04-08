import { SVGProps } from "react";

export const Profile = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
        d="M10.125 9.75C8.18359 9.75 6.625 8.19141 6.625 6.25C6.625 4.33594 8.18359 2.75 10.125 2.75C12.0391 2.75 13.625 4.33594 13.625 6.25C13.625 8.19141 12.0391 9.75 10.125 9.75ZM12.5586 10.625C14.582 10.625 16.25 12.293 16.25 14.3164V15.4375C16.25 16.1758 15.6484 16.75 14.9375 16.75H5.3125C4.57422 16.75 4 16.1758 4 15.4375V14.3164C4 12.293 5.64062 10.625 7.66406 10.625H8.12891C8.73047 10.9258 9.41406 11.0625 10.125 11.0625C10.8359 11.0625 11.4922 10.9258 12.0938 10.625H12.5586Z"
        fill={fill}
      />
    </svg>
  );
};
