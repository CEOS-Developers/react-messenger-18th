import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
}

const BackIcon: React.FC<IconProps> = ({
  width = 12,
  height = 18,
  fillColor = 'black',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="BackIcon"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7397 0.337954C11.1903 0.788559 11.1903 1.51913 10.7397 1.96974L3.70946 9L10.7397 16.0303C11.1903 16.4809 11.1903 17.2114 10.7397 17.662C10.2891 18.1126 9.55854 18.1126 9.10793 17.662L1.26178 9.81589C0.811177 9.36529 0.811177 8.63471 1.26178 8.18411L9.10793 0.337954C9.55854 -0.112651 10.2891 -0.112651 10.7397 0.337954Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default BackIcon;
