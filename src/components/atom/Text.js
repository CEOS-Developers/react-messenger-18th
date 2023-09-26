import styled from "styled-components";

export const Text = ({
  size = 1,
  weight = 500,
  color = "inherit",
  children,
  variant,
  as = "span",
  spacing = "-0px",
  font = "Pretendard",
  cursor = "inherit",
  lineHeight = "120%",
  align = "center",
  ...rest
}) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      variant={variant}
      spacing={spacing}
      font={font}
      align={align}
      cursor={cursor}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  word-wrap: break-word;
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => (color ? theme.colors[color] : color)};
  overflow: ${({ isCut }) => (isCut ? "hidden" : "")};
  text-overflow: ${({ isCut }) => (isCut ? "ellipsis" : "")};
  display: ${({ isCut }) => (isCut ? "-webkit-box" : "")};
  -webkit-line-clamp: ${({ isCut }) => (isCut ? 1 : "")};
  -webkit-box-orient: ${({ isCut }) => (isCut ? "vertical" : "")};
  letter-spacing: ${({ spacing }) => spacing};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};
`;
