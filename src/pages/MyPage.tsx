import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import styled from 'styled-components';
import theme from '../style/theme';
import ProfileIcon from '../static/PropfileIcon';
import SettingIcon from '../static/SettingIcon';
import ProfileLink from '../components/ProfileLink';

const MyPage = () => {
  return (
    <Wrapper>
      <MyHeader>마이페이지</MyHeader>
      <Body>
        <MyProfile>
          <ProfileIcon width={80} height={80} />
          <MyProfileRightWrapper>
            <MyProfileTop>
              이은비
              <SettingIcon fillColor="#d9d9d9" />
            </MyProfileTop>
            <MyProfileBottom>ekdldkaa@naver.com</MyProfileBottom>
          </MyProfileRightWrapper>
        </MyProfile>

        <ProfileLink
          imageUrl="/img/Behance.png"
          title="Behance"
          linkTo="https://github.com/silverain02"
        />
        <ProfileLink
          imageUrl="/img/Github.png"
          title="Github"
          linkTo="https://github.com/silverain02"
        />
        <ProfileLink
          imageUrl="/img/Instagram.png"
          title="Instagram"
          linkTo="https://instagram.com/silverain02_?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
        />
        <ProfileLink
          imageUrl="/img/Surfit.png"
          title="Surfit"
          linkTo="https://velog.io/@ekdldkaa"
        />
      </Body>

      <Footer />
    </Wrapper>
  );
};

const MyProfileRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 15px;
`;
const MyProfileBottom = styled.div`
  font-style: ${theme.fonts.caption1};
  color: ${theme.colors.g4};
`;
const MyProfileTop = styled.div`
  font-style: ${theme.fonts.subText};
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
const MyProfile = styled.div`
  border-bottom: 1.5px solid ${theme.colors.g2};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 15%;

  padding: 10px;
  padding-left: 2rem;
  padding-right: 1rem;
  gap: 20px;
`;

const MyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-style: ${theme.fonts.heading};

  height: 7%;
  width: 100%;

  padding-left: 2rem;
  padding-right: 1rem;

  border-bottom: 2px solid ${theme.colors.g2};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  width: 100%;
`;

export default MyPage;
