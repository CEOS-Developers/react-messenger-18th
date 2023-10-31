import GlobalFooter from "components/GlobalFooter";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";

const MyPage = () => {
  return (
    <div>
      <HeaderWrapper>
        <GlobalHeader headText={"마이페이지"} leftChild={null} />
      </HeaderWrapper>
      <FooterWrapper>
        <GlobalFooter />
      </FooterWrapper>
    </div>
  );
};

export default MyPage;

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
