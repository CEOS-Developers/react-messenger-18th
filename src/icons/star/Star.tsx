import React from "react";

interface StarProps {
  color: string;
}

export default function Star({ color }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.4rem"
      height="2.4rem"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={color}
        stroke="#828282"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
