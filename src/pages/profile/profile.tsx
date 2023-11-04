import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//이미지 & datas
import bottomBar from "../../assets/images/LightBottomBar.svg";
import StatusBar from "../../components/StatusBar/statusbar";
import BigIconLogo from "../../assets/images/BigIconLogo.svg";
import Github from "../../assets/images/github.svg";
import RightArrow from "../../assets/images/Arrow.svg";
import Instagram from "../../assets/images/instagram.svg";
import userData from "../../assets/datas/userdata.json";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="pageWrapper">
      <ProfileContainer>
        <StatusBar />

        <Title>My Profile</Title>

        <BigIcon src={BigIconLogo} />
        <Name>{userData.users[0].name}</Name>
        <Email>donghyun98@gmail.com</Email>

        <Rectangle
          onClick={() => window.open("https://github.com/dhshin98", "_blank")}
        >
          <Icon src={Github} width=" 2.77813rem" height="2.77813rem" />
          <RectangleInfo>
            <Subtitle>GitHub</Subtitle>
            <SubtitleInfo>https://github.com/dhshin98</SubtitleInfo>
          </RectangleInfo>
          <RightArrowIcon src={RightArrow} />
        </Rectangle>

        <Rectangle>
          <Icon src={Instagram} width="2.1875rem" height="2.1875rem" />
          <RectangleInfo>
            <Subtitle>Instagram</Subtitle>
            <SubtitleInfo>@인스타 아이디</SubtitleInfo>
          </RectangleInfo>
          <RightArrowIcon src={RightArrow} />
        </Rectangle>

        <Rectangle onClick={() => navigate("/chatlist")}>
          <Icon src={Instagram} width="2.1875rem" height="2.1875rem" />
          <RectangleInfo>
            <Subtitle>Instagram</Subtitle>
            <SubtitleInfo>{userData.users[0].instagram}</SubtitleInfo>
          </RectangleInfo>
          <RightArrowIcon src={RightArrow} />
        </Rectangle>
        <BottomBarIcon src={bottomBar} alt="bottom bar Icon" />
      </ProfileContainer>
    </div>
  );
}
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border-radius: 1.5rem;
  height: 100vh;
  width: 100vw;
  border: solid var(--gray-1);
`;

const Title = styled.text`
  font-family: "SF Pro Text";
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  width: 100%;
  padding-left: 1.37rem;
  padding-top: 2.94rem;
`;
const BigIcon = styled.img`
  width: 5.9375rem;
  height: 5.93725rem;
  margin-top: 2.62rem;
`;
const Rectangle = styled.div`
  width: 90%;
  height: 4.1875rem;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.69rem;
`;
const Icon = styled.img`
  /* width: ${(props) =>
    props.src === "Instagram" ? "2.1875rem" : "2.77813rem"};
  height: ${(props) =>
    props.src === "Instagram" ? "2.1875rem" : "2.77813rem"}; 
  */
  margin: 0.69rem 0.35rem 0.72rem 0.75rem;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
`;
const RectangleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.06rem;
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 0.44rem;
  padding-bottom: 1.12rem;
  padding-top: 0.94rem;
`;

const RightArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;
  position: relative;
  margin-right: 1.44rem;
`;
const Subtitle = styled.text`
  font-family: "SF Pro Text";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const SubtitleInfo = styled.text`
  color: var(--gray-1);
  font-family: "SF Pro Text";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

const BottomBarIcon = styled.img`
  width: 100%;
  height: 2.125rem;
  margin-bottom: 0;
  /* position: relative; */
  position: absolute;
  bottom: 0;
`;

const Name = styled.text`
  color: var(--black);
  font-family: "SF Pro Text";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0.69rem;
`;

const Email = styled.text`
  color: var(--gray-1);
  text-align: right;
  font-family: "SF Pro Text";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
  text-decoration-line: underline;
  margin-bottom: 3.25rem;
`;
