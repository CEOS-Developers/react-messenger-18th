import React from 'react';

interface IconProps {
  fillColor?: string;
}

const ChatIcon: React.FC<IconProps> = ({ fillColor = '#d9d9d9' }) => {
  return (
    <svg
      width="64"
      height="52"
      viewBox="0 0 64 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.9999 33.6569C38.1041 33.6569 43.0525 29.6981 43.0525 24.8148C43.0525 19.9314 38.1041 15.9727 31.9999 15.9727C25.8957 15.9727 20.9473 19.9314 20.9473 24.8148C20.9473 27.7076 22.6837 30.2759 25.3683 31.8891V35.1395C25.3683 35.8797 26.2236 36.2923 26.803 35.8315L29.7642 33.4759C30.4863 33.5945 31.234 33.6569 31.9999 33.6569Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ChatIcon;
