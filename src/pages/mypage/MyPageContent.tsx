import Icon from "pages/chatroom/icon";
import { styled } from "styled-components";
import LinkContent from "./LinkContent";

const MyPageContent = () => {
  return (
    <div>
      <ProfileContainer>
        <ProfileImg src={"/assets/profile.png"} alt="profile" />
        <ProfileInfo>
          <UserName>
            <div>최영재</div>
            <ArrowWrapper>
              <Icon size={28} icon="arrow_forward" color="#A4A2B7" />
            </ArrowWrapper>
          </UserName>
          <UserMail>ceos.shinchon@gmail.com</UserMail>
        </ProfileInfo>
      </ProfileContainer>
      <LinkContent
        imageUrl="/assets/be.svg"
        url="https://www.behance.net/a45bdbd8"
        text="behance"
      />
      <LinkContent
        imageUrl="/assets/github.svg"
        url="https://github.com/geeoneee"
        text="github"
      />
      <LinkContent
        imageUrl="/assets/instagram.svg"
        url="https://www.instagram.com/hambaga/"
        text="instagram"
      />
    </div>
  );
};

export default MyPageContent;

const ProfileContainer = styled.div`
  display: flex;
  padding: 36px 16px;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
`;

const ProfileInfo = styled.div`
  padding-left: 12px;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  color: Black_Light;
  padding-bottom: 4px;
`;

const UserMail = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 120%;
  color: #828099;
`;

const ArrowWrapper = styled.div`
  padding-left: 180px;
`;
