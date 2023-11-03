import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
}

const HamburgerIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fillColor = 'black',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="HamburgerIcon"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 2C0.75 1.30964 1.30964 0.75 2 0.75H18C18.6904 0.75 19.25 1.30964 19.25 2C19.25 2.69036 18.6904 3.25 18 3.25H2C1.30964 3.25 0.75 2.69036 0.75 2ZM0.75 9C0.75 8.30964 1.30964 7.75 2 7.75H18C18.6904 7.75 19.25 8.30964 19.25 9C19.25 9.69036 18.6904 10.25 18 10.25H2C1.30964 10.25 0.75 9.69036 0.75 9ZM2 14.75C1.30964 14.75 0.75 15.3096 0.75 16C0.75 16.6904 1.30964 17.25 2 17.25H18C18.6904 17.25 19.25 16.6904 19.25 16C19.25 15.3096 18.6904 14.75 18 14.75H2Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default HamburgerIcon;
