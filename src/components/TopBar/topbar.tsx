import styled from "styled-components";
import StatusBar from "../StatusBar/statusbar";
import ChatTitle from "../ChatTitle/chatTitle";

const TopBar = () => {
  return (
    <TopBarContainer>
      <StatusBar />
      {/* <ChatTitle /> */}
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  width: 23.4375rem;
  height: 6.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default TopBar;
