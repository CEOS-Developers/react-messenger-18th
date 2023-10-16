import styled from 'styled-components';
import { ReactComponent as HomeOnIcon } from 'static/images/home-on-icon.svg';
import { ReactComponent as HomeOffIcon } from 'static/images/home-off-icon.svg';
import { ReactComponent as ChatOnIcon } from 'static/images/chat-on-icon.svg';
import { ReactComponent as ChatOffIcon } from 'static/images/chat-off-icon.svg';
import { ReactComponent as CallOffIcon } from 'static/images/call-off-icon.svg';
import NavBarButton from 'pages/common/NavBarButton';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <NavBarButton
        children={location.pathname === '/' ? <HomeOnIcon /> : <HomeOffIcon />}
        buttonName="Home"
        handleOnClickButton={() => {
          navigate('/');
        }}
      />
      <NavBarButton
        children={
          location.pathname === '/chat' ? <ChatOnIcon /> : <ChatOffIcon />
        }
        buttonName="Chat"
        handleOnClickButton={() => {
          navigate('/chat');
        }}
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
