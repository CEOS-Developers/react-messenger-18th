import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonWithIconProps {
  children: ReactNode;
  handleOnClickButton?: () => void;
}
const ButtonWithIcon = ({
  children,
  handleOnClickButton,
}: ButtonWithIconProps) => {
  return <Button onClick={handleOnClickButton}>{children}</Button>;
};

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  display: inline-block;
  font-size: 0;
  line-height: 0;
`;
export default ButtonWithIcon;
