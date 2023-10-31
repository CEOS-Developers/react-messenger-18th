import GlobalButton from "components/GlobalButton";
import GlobalHeader from "components/GlobalHeader";
import GlobalFooter from "components/GlobalFooter";
import { styled } from "styled-components";

const Chat = () => {
  return (
    <div>
      <HeaderWrapper>
        <GlobalHeader
          headText={"채팅"}
          leftChild={
            <GlobalButton
              text="왼쪽 버튼"
              customType={"search"}
              onClick={() => alert("왼쪽 클릭")}
            />
          }
        />
      </HeaderWrapper>
      <FooterWrapper>
        <GlobalFooter />
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
