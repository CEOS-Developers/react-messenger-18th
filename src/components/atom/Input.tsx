import React, { ChangeEvent, KeyboardEvent, RefObject } from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  width?: string;
  height?: string;
  bgcolor?: string;
  color?: string;
  weight?: string;
  lineheight?: string;
  fontSize?: string;
  padding?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement>;
}

const InputBase = styled.input<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 6px 8px;
  background-color: ${({ bgcolor, theme }) =>
    bgcolor ? theme.colors[bgcolor] : "inherit"};
  color: ${({ theme }) => theme.colors["mainBlack"]};
  line-height: ${({ lineheight }) => lineheight};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ weight }) => weight};
  padding: ${({ padding }) => padding};
  &::placeholder {
    color: ${({ theme }) => theme.colors["gray"]};
    font-weight: 400;
  }
`;

export const Input: React.FC<InputProps> = ({
  placeholder = "메시지를 입력해주세요",
  width,
  height,
  bgcolor,
  color,
  weight = "600",
  lineheight = "24px",
  fontSize = "14px",
  onChange,
  value,
  onKeyDown,
  inputRef,
  padding,
}: InputProps) => {
  return (
    <InputBase
      type="text"
      placeholder={placeholder}
      width={width}
      height={height}
      bgcolor={bgcolor}
      color={color}
      weight={weight}
      lineheight={lineheight}
      fontSize={fontSize}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      padding={padding}
    />
  );
};
