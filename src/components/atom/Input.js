import { styled } from "styled-components";

export const Input = ({
  placeholder = "메시지를 입력해주세요",
  width,
  height,
  bgColor,
  color,
  weight = "600",
  lineHeight = "24px",
  fontSize = "14px",
}) => {
  return (
    <InputBase
      placeholder={placeholder}
      width={width}
      height={height}
      bgColor={bgColor}
      color={color}
      weight={weight}
      lineHeight={lineHeight}
      fontSize={fontSize}
    ></InputBase>
  );
};

const InputBase = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 6px 8px;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme.colors[bgColor] : "inherit"};
  color: ${({ theme }) => theme.colors["mainBlack"]};
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ weight }) => weight};
  &::placeholder {
    color: ${({ theme }) => theme.colors["gray"]};
  }
`;
