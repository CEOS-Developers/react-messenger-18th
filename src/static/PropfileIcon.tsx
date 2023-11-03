import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
}

const ProfileIcon: React.FC<IconProps> = ({
  width = 44,
  height = 44,
  fillColor = 'white',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="22" fill="#EEEEEE" />
      <circle cx="22.0006" cy="17.9986" r="5.21739" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.2506 25.2188C17.0072 25.2188 15.8148 25.8257 14.9356 26.9061C14.0564 27.9864 13.5625 29.4517 13.5625 30.9796C13.5625 31.0596 13.5648 31.1394 13.5692 31.2188H30.4329C30.4374 31.1394 30.4396 31.0596 30.4396 30.9796C30.4396 29.4517 29.9457 27.9864 29.0665 26.9061C28.1873 25.8257 26.9949 25.2188 25.7515 25.2188H18.2506Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ProfileIcon;
