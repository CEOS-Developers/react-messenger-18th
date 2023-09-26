import styled from "styled-components";

// 일반적인 Flex 박스 atom 단위로 활용
export const Flex = ({
  children,
  width = "auto",
  height = "auto",
  direction = "row",
  justify = "start",
  align = "center",
  gap = 0,
  wrap = "nowrap",
  color = "inherit",
  overflow = "visible",
  padding = "0",
  maxWidth = "none",
  borderBottom = "0",
  borderRadius = "0",
  borderColor = "none",
  margin = "0",
  self = "auto",
  inputRef,
}) => {
  return (
    <FlexBase
      height={height}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      wrap={wrap}
      color={color}
      overflow={overflow}
      borderRadius={borderRadius}
      padding={padding}
      maxWidth={maxWidth}
      borderColor={borderColor}
      margin={margin}
      self={self}
      ref={inputRef}
      
    >
      {children}
    </FlexBase>
  );
};

const FlexBase = styled.div`
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
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  max-width: ${({ maxWidth }) => maxWidth};
  border-bottom: ${({ borderColor, theme }) =>
    "1px " + "solid " + theme.colors[borderColor]};
  margin: ${({ margin }) => margin};
`;
