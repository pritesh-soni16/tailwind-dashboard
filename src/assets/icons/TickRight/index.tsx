import { SVGProps } from "react";

export const TickRight = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const { width, height, fill, className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.5367 5.53288C20.0453 4.8997 20.9464 4.81939 21.5497 5.35319C22.1527 5.88707 22.2301 6.83312 21.7218 7.46647L12.5659 18.8708C11.7775 19.8524 10.4087 20.0476 9.39957 19.3219L2.62129 14.4469C1.97035 13.9788 1.80434 13.0454 2.25015 12.362C2.69603 11.6786 3.58512 11.5034 4.2361 11.9714L10.6581 16.5905L19.5367 5.53288Z"
        fill={fill}
      />
    </svg>
  );
};
