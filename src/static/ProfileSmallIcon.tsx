import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
}

const ProfileSmallIcon: React.FC<IconProps> = ({
  width = 36,
  height = 36,
  fillColor = 'white',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#D9D9D9" />
      <circle cx="18" cy="14.7273" r="4.26877" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9315 20.6324C13.9142 20.6324 12.9386 21.129 12.2192 22.0129C11.4999 22.8968 11.0958 24.0957 11.0958 25.3458C11.0958 25.4113 11.0976 25.4766 11.1013 25.5415H24.8988C24.9025 25.4766 24.9044 25.4113 24.9044 25.3458C24.9044 24.0957 24.5002 22.8968 23.7809 22.0129C23.0616 21.129 22.0859 20.6324 21.0686 20.6324H14.9315Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ProfileSmallIcon;
