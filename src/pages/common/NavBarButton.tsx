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
  width: fit-content;
  height: fit-content;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  display: flex;
`;

const ButtonName = styled.div``;

export default NavBarButton;
