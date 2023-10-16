import styled from 'styled-components';
import { ReactComponent as HomeOnIcon } from 'static/images/home-on-icon.svg';
import { ReactComponent as HomeOffIcon } from 'static/images/home-off-icon.svg';
import { ReactComponent as ChatOnIcon } from 'static/images/chat-on-icon.svg';
import { ReactComponent as ChatOffIcon } from 'static/images/chat-off-icon.svg';
import { ReactComponent as CallOffIcon } from 'static/images/call-off-icon.svg';
import NavBarButton from 'pages/common/NavBarButton';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarButton
        children={<HomeOnIcon />}
        buttonName="Home"
        handleOnClickButton={() => {}}
      />
      <NavBarButton
        children={<HomeOnIcon />}
        buttonName="Home"
        handleOnClickButton={() => {}}
      />
      <NavBarButton
        children={<HomeOnIcon />}
        buttonName="Home"
        handleOnClickButton={() => {}}
      />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
`;

export default NavBar;
