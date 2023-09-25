import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonWithIconProps {
  children: ReactNode;
  className?: string;
  handleOnClickButton?: () => void;
}
const ButtonWithIcon = ({
  children,
  className,
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
`;
export default ButtonWithIcon;
