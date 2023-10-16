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
        children={<ChatOffIcon />}
        buttonName="Chat"
        handleOnClickButton={() => {}}
      />
      <NavBarButton
        children={<CallOffIcon />}
        buttonName="Call"
        handleOnClickButton={() => {}}
      />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 24px 52px 0 52px;
  background-color: white;
`;

export default NavBar;
