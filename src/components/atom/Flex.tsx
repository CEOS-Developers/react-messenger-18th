import React, { ReactNode, RefObject } from "react";
import styled from "styled-components";

interface FlexProps {
  children?: ReactNode;
  width?: string;
  height?: string;
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: string;
  color?: string;
  overflow?: string;
  padding?: string;
  maxwidth?: string;
  radius?: string;
  bordercolor?: string;
  margin?: string;
  self?: string;
  shadow?: string;
  grow?: string;
  position?: string;
  bottom?: string;
  onClick?: any;
  inputRef?: RefObject<HTMLDivElement>;
}

const FlexBase = styled.div<FlexProps>`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  align-self: ${({ self }) => self};
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
  overflow: ${({ overflow }) => overflow};
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] : "inherit"};
  border-radius: ${({ radius }) => radius};
  padding: ${({ padding }) => padding};
  max-width: ${({ maxwidth }) => maxwidth};
  border-bottom: ${({ bordercolor, theme }) =>
    bordercolor ? "1px solid " + theme.colors[bordercolor] : "none"};
  margin: ${({ margin }) => margin};
  box-shadow: ${({ shadow }) => shadow};
  flex-grow: ${({ grow }) => grow};
  position: ${({ position }) => position};
  bottom: ${({ bottom }) => bottom};
`;

export const Flex: React.FC<FlexProps> = ({
  children,
  inputRef,
  ...rest
}: FlexProps) => {
  return (
    <FlexBase ref={inputRef} {...rest}>
      {children}
    </FlexBase>
  );
};
