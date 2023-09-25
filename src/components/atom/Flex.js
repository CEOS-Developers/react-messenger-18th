import styled from "styled-components";

export const Flex = ({
  children,
  width = "auto",
  height = "auto",
  direction = "row",
  justify = "start",
  align = "center",
  gap = 0,
  wrap = "no-wrap",
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
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
`;
