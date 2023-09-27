import styled from "styled-components";

export const Text = ({
  size = 1,
  weight = 500,
  color = "inherit",
  children,
  as = "span",
  spacing = "-0px",
  font = "Pretendard",
  cursor = "inherit",
  lineHeight = "120%",
  align = "center",
  width = "fit-content",
  self = "auto",
  ...rest
}) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      spacing={spacing}
      font={font}
      width={width}
      align={align}
      cursor={cursor}
      lineHeight={lineHeight}
      self={self}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.div`
  word-break: break-word;
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => (color ? theme.colors[color] : color)};
  width: ${({ width }) => width};
  letter-spacing: ${({ spacing }) => spacing};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};
  align-self: ${({ self }) => self};
`;
