import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
}

const NextIcon: React.FC<IconProps> = ({
  width = 12,
  height = 18,
  fillColor = '#d9d9d9',
}) => {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.2603 9.84577C12.8097 10.2964 12.8097 11.0269 13.2603 11.4776L20.2905 18.5078L13.2603 25.5381C12.8097 25.9887 12.8097 26.7193 13.2603 27.1699C13.7109 27.6205 14.4415 27.6205 14.8921 27.1699L22.7382 19.3237C23.1888 18.8731 23.1888 18.1425 22.7382 17.6919L14.8921 9.84577C14.4415 9.39516 13.7109 9.39516 13.2603 9.84577Z"
        fill={fillColor}
      />
    </svg>
  );
};
export default NextIcon;
