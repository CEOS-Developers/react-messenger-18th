import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ChipButton, PageHeader } from "@common/components";
import { ReactComponent as LeftArrow } from "@common/icons/arrows/leftarrow.svg";
import { ReactComponent as Edit } from "@common/icons/edit.svg";
import { ReactComponent as Phone } from "@common/icons/profileLink/phone.svg";
import { ReactComponent as Mail } from "@common/icons/profileLink/mail.svg";
import { ReactComponent as Behance } from "@common/icons/profileLink/behance.svg";
import { ReactComponent as Instagram } from "@common/icons/profileLink/instagram.svg";
import { ReactComponent as Github } from "@common/icons/profileLink/github.svg";
import { LinkButton, Profile } from "@features/user";
import { ReactComponent as BottomArrow } from "@common/icons/arrows/bottomarrow.svg";
import theme from "@styles/theme";

const ACCESS_USER = [
  { icon: Phone, text: "+82)10-1234-5678", linkTo: "" },
  { icon: Mail, text: "ren6294@naver.com", linkTo: "" },
];

const PERSONAL_LINK = [
  {
    icon: Behance,
    text: "Behance",
    linkTo: "https://www.behance.net/",
  },
  {
    icon: Instagram,
    text: "Instagram",
    linkTo: "https://www.instagram.com/hyeonmin_0614",
  },
  {
    icon: Github,
    text: "Github",
    linkTo: "https://github.com/wokbjso",
  },
];

export function UserProfile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <>
      <PageHeader
        leftIcon={<LeftArrow onClick={() => navigate(-1)} />}
        title="프로필"
        rightIcon1={<Edit />}
        addClass={`background-color:${theme.colors.gray7}`}
      />
      <ProfileInfoWrapper>
        <MainProfile>
          <Profile $img={state.img} $size="14rem" />
          <MainProfileText>
            <UserName>
              <span>{state.name}</span>
            </UserName>
            <ChipButton
              width="10rem"
              height="2.8rem"
              radius="0.4rem"
              color={theme.colors.mainColor}
              addClass="padding: 0.2rem 0.4rem 0.2rem 0.8rem;"
            >
              <ChipBtnText>
                <span>{state.majorIn}</span>
              </ChipBtnText>
              <BottomArrow />
            </ChipButton>
          </MainProfileText>
        </MainProfile>
        <ContactUserWrapper>
          {ACCESS_USER.map((access) => (
            <LinkButton
              key={access.text}
              width="16.4rem"
              height="7.7rem"
              radius="0.8rem"
              icon={<access.icon />}
              onClick={() => window.open(access.linkTo)}
              addClass="padding: 1.2rem 2rem;"
            >
              <UserInfoLinkBtnText>
                <span>{access.text}</span>
              </UserInfoLinkBtnText>
            </LinkButton>
          ))}
        </ContactUserWrapper>
      </ProfileInfoWrapper>
      <DirectAccessWrapper>
        <DirectAccessText>
          <span>바로가기</span>
        </DirectAccessText>
        <DirectAccessLink>
          {PERSONAL_LINK.map((link) => (
            <LinkButton
              key={link.text}
              width="11.2rem"
              height="7.8rem"
              icon={<link.icon />}
              onClick={() => window.open(link.linkTo)}
            >
              <SnsLinkBtnText>
                <span>{link.text}</span>
              </SnsLinkBtnText>
            </LinkButton>
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

const ChipBtnText = styled.div`
  display: flex;
  justify-content: center;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.body1};
    font-weight: 500;
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

const UserInfoLinkBtnText = styled.div`
  margin-top: 0.8rem;
  span {
    ${(props) => props.theme.fontStyles.body2}
    font-size: 1.4rem;
  }
`;

const SnsLinkBtnText = styled.div`
  margin-top: 0.4rem;
  span {
    ${(props) => props.theme.fontStyles.body2}
  }
`;

const DirectAccessLink = styled.div`
  margin-top: 1.2rem;
  display: flex;
`;
