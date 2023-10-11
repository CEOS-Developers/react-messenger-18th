import React from "react";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as LeftArrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as Edit } from "../icons/edit.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as Mail } from "../icons/mail.svg";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";
import styled from "styled-components";
import ChipButton from "../components/profile/ChipButton";
import ContactUserBtn from "../components/profile/ContactUserButton";
import { profileLinkState } from "../state/profileLinkState";
import LinkButton from "../components/profile/LinkButton";

export default function MyProfile() {
  const { navigateBack } = useNavigateOnClick();
  return (
    <>
      <PageHeader
        leftIcon={<LeftArrow onClick={navigateBack} />}
        title="프로필"
        rightIcon1={<Edit />}
      />
      <ProfileInfoWrapper>
        <MainProfile>
          <ProfilePhoto />
          <MainProfileText>
            <UserName>
              <span>김현민</span>
            </UserName>
            <ChipButton text="Frontend" />
          </MainProfileText>
        </MainProfile>
        <ContactUserWrapper>
          <ContactUserBtn
            icon={<Phone />}
            text="+82) 10-1234-5678"
            addClass="margin-right:0.9rem;"
          />
          <ContactUserBtn icon={<Mail />} text="ren6294@naver.com" />
        </ContactUserWrapper>
      </ProfileInfoWrapper>
      <DirectAccessWrapper>
        <DirectAccessText>
          <span>바로가기</span>
        </DirectAccessText>
        <DirectAccessLink>
          {profileLinkState.map((link) => (
            <LinkButton key={link.text} icon={<link.icon />} text={link.text} />
          ))}
        </DirectAccessLink>
      </DirectAccessWrapper>
    </>
  );
}

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35.1rem;
  padding: 0 2rem;
  border-radius: 0px 0px 1.6rem 1.6rem;
  background-color: ${(props) => props.theme.colors.gray7};
`;

const MainProfile = styled.div`
  width: 14rem;
  height: 22.2rem;
  display: flex;
  flex-direction: column;
`;

const ProfilePhoto = styled.div`
  height: 14rem;
  border-radius: 50%;
  background-image: url("/img/profile.jpg");
  background-size: cover;
`;

const MainProfileText = styled.div`
  margin-top: 1.2rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.div`
  text-align: center;
  height: 3.8rem;
  margin-bottom: 0.4rem;
  span {
    ${(props) => props.theme.fontStyles.headLine0}
  }
`;

const ContactUserWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
`;

const DirectAccessWrapper = styled.div`
  margin-top: 3.12rem;
  height: 11.2rem;
  padding: 0 2rem;
`;

const DirectAccessText = styled.div`
  height: 2.1rem;
  span {
    color: ${(props) => props.theme.colors.gray2};
    ${(props) => props.theme.fontStyles.body2_medium};
  }
`;

const DirectAccessLink = styled.div`
  margin-top: 1.2rem;
  display: flex;
`;
