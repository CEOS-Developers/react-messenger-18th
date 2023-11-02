import GlobalButton from "components/GlobalButton";
import GlobalFooter from "components/GlobalFooter";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";
import FriendContent from "./FriendContent";

const Friend = () => {
  return (
    <div>
      <HeaderWrapper>
        <GlobalHeader
          headText={"친구"}
          leftChild={<GlobalButton customType={"friendsearch"} />}
        />
      </HeaderWrapper>
      <FriendContentWrapper>
        <FriendContent />
      </FriendContentWrapper>
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

export default Friend;

const HeaderWrapper = styled.header`
  top: 38px;
  width: 375px;
`;

const FooterWrapper = styled.header`
  bottom: 34px;
  width: 375px;
`;

const FriendContentWrapper = styled.header`
  top: 98px;
  width: 375px;
`;
