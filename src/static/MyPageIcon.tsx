import React from 'react';

interface IconProps {
  fillColor?: string;
}

const MyPageIcon: React.FC<IconProps> = ({ fillColor = '#d9d9d9' }) => {
  return (
    <svg
      width="64"
      height="52"
      viewBox="0 0 64 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32.0006" cy="21.9986" r="5.21739" fill={fillColor} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.2506 29.2188C27.0072 29.2188 25.8148 29.8257 24.9356 30.9061C24.0564 31.9864 23.5625 33.4517 23.5625 34.9796C23.5625 35.0596 23.5648 35.1394 23.5692 35.2188H40.4329C40.4374 35.1394 40.4396 35.0596 40.4396 34.9796C40.4396 33.4517 39.9457 31.9864 39.0665 30.9061C38.1873 29.8257 36.9949 29.2188 35.7515 29.2188H28.2506Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default MyPageIcon;
