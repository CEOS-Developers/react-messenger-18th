import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { color } from "../assets/styles/color";

import { useRecoilValue } from "recoil";
import { userArrayState } from "../assets/recoil/recoil";

//img
import back from "../assets/images/back.svg";
import link from "../assets/images/link.svg";

import insta from "../assets/images/insta.svg";
import behance from "../assets/images/behance.svg";
import github from "../assets/images/github.svg";

//bar

import status from "../assets/images/status.svg";

function ProfilePage() {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const userArray = useRecoilValue(userArrayState);
  const userInfo = userArray.find(
    (user) => user.id === parseInt(user_id || "0", 10)
  );

  return (
    <Container>
      <StatusBar src={status} />
      <img src={back} className="back" onClick={() => navigate(-1)} />
      <UserInfo>
        <Profile src={userInfo?.profileImage} />
        <span className="username">{userInfo?.userName}</span>
        <span className="usermail">{userInfo?.email}</span>
      </UserInfo>
      <LinkContainer>
        <span className="link-title">다른 사람이 나와 소통할 수 있는 방법</span>
        <Link href="https://www.instagram.com/">
          <div className="box">
            <img className="link-icon" src={insta} />
            <span>instagram</span>
          </div>
          <img src={link} />
        </Link>
        <Link href="https://github.com/">
          <div className="box">
            <img className="link-icon" src={github} />
            <span>github</span>
          </div>
          <img src={link} />
        </Link>

        <Link href="https://www.behance.net/">
          <div className="box">
            <img className="link-icon" src={behance} />
            <span>Behance</span>
          </div>
          <img src={link} />
        </Link>
      </LinkContainer>
    </Container>
  );
}

export default ProfilePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 375px;
  height: 812px;

  .back {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin: 16px 0 0 12px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid ${color.grey1};

  .username {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }

  .usermail {
    color: ${color.grey3};
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 130%;

    margin: 4px 0 24px;
  }
`;

const Profile = styled.img`
  display: flex;
  width: 160px;
  height: 160px;
  margin: 16px;
  border-radius: 50%;
  border: 1px solid ${color.grey2};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  object-fit: cover;
`;

const LinkContainer = styled.div`
  margin-top: 24px;
  padding-left: 12px;

  .link-title {
    color: ${color.grey3};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Link = styled.a.attrs({ target: "_blank" })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-right: 6px;

  cursor: pointer;
  text-decoration: none;

  .box {
    display: flex;
    align-items: center;
  }

  .link-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  span {
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
`;

const StatusBar = styled.img`
  width: 375px;
  height: 44px;
`;

const Bar = styled.img`
  width: 375px;
  height: 34px;
`;
