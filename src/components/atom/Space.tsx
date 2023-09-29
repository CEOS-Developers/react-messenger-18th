import React from "react";
import styled from "styled-components";

interface SpaceProps {
  width?: string;
  height?: string;
}

const SpaceBase =
  styled.div <
  SpaceProps >
  `
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Space: React.FC<SpaceProps> = ({
  width = "auto",
  height = "auto",
}) => {
  return <SpaceBase width={width} height={height} />;
};
