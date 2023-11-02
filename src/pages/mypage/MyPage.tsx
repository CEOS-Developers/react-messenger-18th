import GlobalButton from "components/GlobalButton";
import GlobalFooter from "components/GlobalFooter";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";
import MyPageContent from "./MyPageContent";

const MyPage = () => {
  return (
    <div>
      <HeaderWrapper>
        <GlobalHeader headText={"마이페이지"} leftChild={null} />
      </HeaderWrapper>
      <MyPageContentWrapper>
        <MyPageContent />
      </MyPageContentWrapper>
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

export default MyPage;

const HeaderWrapper = styled.header`
  top: 38px;
  width: 375px;
`;

const FooterWrapper = styled.header`
  bottom: 34px;
  width: 375px;
`;

const MyPageContentWrapper = styled.div`
  top: 98px;
  width: 375px;
`;
