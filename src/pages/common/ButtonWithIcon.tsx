import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonWithIconProps {
  className?: string;
  children: ReactNode;
  handleClickButton?: (e?: React.MouseEvent | MouseEvent) => void;
}
const ButtonWithIcon = ({
  className,
  children,
  handleClickButton,
}: ButtonWithIconProps) => {
  return (
    <Button className={className} onClick={handleClickButton}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  // width: fit-content;
  // height: fit-content;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  display: flex;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export default ButtonWithIcon;
