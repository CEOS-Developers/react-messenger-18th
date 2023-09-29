import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
}

const SearchIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  fillColor = 'black',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="SearchIcon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.375 8.80859C15.375 12.1223 12.6887 14.8086 9.375 14.8086C6.06129 14.8086 3.375 12.1223 3.375 8.80859C3.375 5.49489 6.06129 2.80859 9.375 2.80859C12.6887 2.80859 15.375 5.49489 15.375 8.80859ZM13.7572 16.0934C12.4776 16.8648 10.9781 17.3086 9.375 17.3086C4.68058 17.3086 0.875 13.503 0.875 8.80859C0.875 4.11417 4.68058 0.308594 9.375 0.308594C14.0694 0.308594 17.875 4.11417 17.875 8.80859C17.875 10.9948 17.0497 12.9882 15.6936 14.4942L18.7585 17.5591C19.2466 18.0472 19.2466 18.8387 18.7585 19.3269C18.2703 19.815 17.4789 19.815 16.9907 19.3269L13.7572 16.0934Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default SearchIcon;
