import styled from "styled-components";
import StatusBar from "../StatusBar/statusbar";
import ChatTitle from "../ChatTitle/chatTitle";

const TopBar = () => {
  return (
    <TopBarContainer>
      <StatusBar />
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  width: 23.4375rem;
  height: 2.75rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default TopBar;
