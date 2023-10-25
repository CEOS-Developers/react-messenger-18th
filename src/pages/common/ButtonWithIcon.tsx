import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonWithIconProps {
  className?: string;
  children: ReactNode;
  handleClickButton?: (e?: React.MouseEvent | MouseEvent) => void;
  size?: number;
}
const ButtonWithIcon = ({
  className,
  children,
  handleClickButton,
  size,
}: ButtonWithIconProps) => {
  return (
    <Button className={className} onClick={handleClickButton} $size={size}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ $size: number | undefined }>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  display: flex;
  svg,
  img {
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
  }
`;
export default ButtonWithIcon;
