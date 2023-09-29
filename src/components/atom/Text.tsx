import React,{ChangeEvent} from "react";
import styled from "styled-components";

interface TextProps {
  size?: string;
  weight?: string;
  color?: string;
  children: React.ReactNode;
  as?: string;
  spacing?: string;
  font?: string;
  cursor?: string;
  lineheight?: string;
  align?: string;
  width?: string;
  self?: string;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StyledText = styled.div<TextProps>`
  word-break: break-word;
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => (color ? theme.colors[color] : color)};
  width: ${({ width }) => width};
  letter-spacing: ${({ spacing }) => spacing};
  line-height: ${({ lineheight }) => lineheight};
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};
  align-self: ${({ self }) => self};
`;

export const Text: React.FC<TextProps> = ({
  size = "inherit",
  weight = "inherit",
  color = "inherit",
  children,
  as = "span",
  spacing = "-0px",
  font = "Pretendard",
  cursor = "inherit",
  lineheight = "120%",
  align = "center",
  width = "fit-content",
  self = "auto",
  ...rest
}: TextProps) => {
  return (
    <StyledText
      as={as}
      size={size}
      weight={weight}
      color={color}
      spacing={spacing}
      font={font}
      width={width}
      align={align}
      cursor={cursor}
      lineheight={lineheight}
      self={self}
      {...rest}
    >
      {children}
    </StyledText>
  );
};
