import GlobalButton from "components/GlobalButton";
import GlobalFooter from "components/GlobalFooter";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Friend = () => {
  const navigate = useNavigate();

  const handleButtonClick = (customType: string) => {
    if (customType === "friend") {
      navigate("/"); // friend 페이지로 이동
    } else if (customType === "chat") {
      navigate("/chat"); // chat 페이지로 이동
    } else if (customType === "mypage") {
      navigate("/mypage"); // mypage 페이지로 이동
    }
  };
  return (
    <div>
      <HeaderWrapper>
        <GlobalHeader
          headText={"친구"}
          leftChild={<GlobalButton customType={"search"} />}
        />
      </HeaderWrapper>
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
  position: fixed;
  top: 38px;
  width: 375px;
`;

const FooterWrapper = styled.header`
  position: fixed;
  bottom: 34px;
  width: 375px;
`;
