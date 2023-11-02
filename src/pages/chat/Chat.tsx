import GlobalButton from "components/GlobalButton";
import GlobalFooter from "components/GlobalFooter";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";
import ChatContent from "./ChatContent";

const Chat = () => {
  return (
    <div>
      <HeaderWrapper>
        <GlobalHeader
          headText={"채팅"}
          leftChild={<GlobalButton customType={"chatsearch"} />}
        />
      </HeaderWrapper>
      <ChatContentWrapper>
        <ChatContent />
      </ChatContentWrapper>
      <FooterWrapper>
        <GlobalFooter
          friendBtn={<GlobalButton customType={"friend"} />}
          chatBtn={<GlobalButton customType={"chat"} />}
          mypageBtn={<GlobalButton customType={"mypage"} />}
        />
      </FooterWrapper>
    </div>
  );
};

export default Chat;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 38px;
  width: 375px;
`;

const FooterWrapper = styled.header`
  position: fixed;
  bottom: 34px;
  width: 375px;
`;

const ChatContentWrapper = styled.header`
  position: fixed;
  top: 98px;
  width: 375px;
`;
