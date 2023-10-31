import GlobalButton from "components/GlobalButton";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";

const ChatSearch = () => {
  return (
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
  );
};

export default ChatSearch;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 38px;
  width: 375px;
`;
