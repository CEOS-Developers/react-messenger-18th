import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonWithIconProps {
  className?: string;
  children: ReactNode;
  handleOnClickButton?: (e?: React.MouseEvent | MouseEvent) => void;
}
const ButtonWithIcon = ({
  className,
  children,
  handleOnClickButton,
}: ButtonWithIconProps) => {
  return (
    <Button className={className} onClick={handleOnClickButton}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  display: flex;
`;
export default ButtonWithIcon;
