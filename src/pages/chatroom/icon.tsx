import { iconName, IconSet } from "./constants";
import styled from "styled-components";

interface IconProps {
  icon: iconName;
  size: number;
  color?: string;
}

const Icon = ({ icon, size, color }: IconProps) => (
  <div>
    <svg
      height={size}
      viewBox={IconSet[icon].viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={IconSet[icon].path} />
    </svg>
  </div>
);

export default Icon;
