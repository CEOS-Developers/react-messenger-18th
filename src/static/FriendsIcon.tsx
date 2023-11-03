import React from 'react';

interface IconProps {
  fillColor?: string;
}

const FriendsIcon: React.FC<IconProps> = ({ fillColor = '#d9d9d9' }) => {
  return (
    <svg
      width="64"
      height="52"
      viewBox="0 0 64 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="37.0436" cy="25.5768" r="4.3854" fill={fillColor} />
      <circle cx="26.9577" cy="19.694" r="4.3854" fill={fillColor} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.8897 31.6445C32.8446 31.6445 31.8424 32.1547 31.1034 33.0628C30.3644 33.9709 29.9492 35.2025 29.9492 36.4867C29.9492 36.5546 29.9511 36.6222 29.955 36.6894H44.1293C44.1331 36.6222 44.1351 36.5546 44.1351 36.4867C44.1351 35.2025 43.7199 33.9709 42.9809 33.0628C42.2419 32.1547 41.2396 31.6445 40.1945 31.6445H33.8897Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.9121 25.8673C30.6498 25.8002 30.3806 25.7656 30.1086 25.7656H23.8038C22.7587 25.7656 21.7564 26.2758 21.0174 27.1839C20.2784 28.092 19.8633 29.3236 19.8633 30.6078C19.8633 30.6721 19.865 30.7361 19.8684 30.7999H33.8341C32.1571 29.7691 31.0132 27.9551 30.9121 25.8673ZM33.0592 27.3984C33.1836 27.6683 33.3345 27.9234 33.5087 28.1604C33.3801 27.8905 33.2298 27.6352 33.0592 27.3984Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default FriendsIcon;
