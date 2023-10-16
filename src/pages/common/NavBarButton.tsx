import { ReactNode } from 'react';
import styled from 'styled-components';

interface NavBarButtonProps {
  children: ReactNode;
  buttonName: string;
  handleOnClickButton?: (e?: React.MouseEvent | MouseEvent) => void;
}

const NavBarButton = ({
  children,
  buttonName,
  handleOnClickButton,
}: NavBarButtonProps) => {
  return (
    <NavBarButtonContainer onClick={handleOnClickButton}>
      {children}
      <ButtonName>{buttonName}</ButtonName>
    </NavBarButtonContainer>
  );
};

const NavBarButtonContainer = styled.button`
  svg {
    width: 24px;
    height: 24px;
  }
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonName = styled.div`
  color: black;
  height: 18px;
  font-size: 12px;
  font-wieght: 300;
  line-height: 120%;
`;

export default NavBarButton;
