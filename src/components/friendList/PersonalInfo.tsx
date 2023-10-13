import React from "react";
import styled from "styled-components";
import RoleButton from "./RoleButton";
import { ReactComponent as Group } from "../../icons/group.svg";
import { ReactComponent as RightIcon } from "../../icons/arrows/rightarrow.svg";
import { majorState } from "../../state/majorState";
import { useNavigate } from "react-router-dom";
import { chatRoomState } from "../../state/chatRoomState";

export interface PersonalInfoProps {
  id: number;
  img: string;
  name: string;
  message: string;
  majorIn: string;
  group: {
    id: number;
    name: string;
    state: string;
  };
}

export default function PersonalInfo({
  id,
  img,
  name,
  message,
  majorIn,
  group,
}: PersonalInfoProps) {
  const navigate = useNavigate();
  return (
    <InfoWrapper>
      <ProfileContainer>
        <ProfilePhoto
          $img={img}
          onClick={() =>
            navigate(`/chatroom/${chatRoomState.FRIEND}/${id}`, {
              state: {
                chatRoomTitle: name,
                img,
                name,
                chatRoomState: chatRoomState.FRIEND,
                chatRoomId: id,
              },
            })
          }
        ></ProfilePhoto>
      </ProfileContainer>
      <ProfileInfoText>
        <NameAndMessage
          onClick={() =>
            navigate(`/chatroom/${chatRoomState.FRIEND}/${id}`, {
              state: {
                chatRoomTitle: name,
                img,
                name,
                chatRoomState: chatRoomState.FRIEND,
                chatRoomId: id,
              },
            })
          }
        >
          <UserName>
            <span>{name}</span>
            <RoleButton
              text={
                majorIn === majorState.DESIGNER
                  ? "D"
                  : majorIn === majorState.FRONTEND
                  ? "F"
                  : ""
              }
            />
          </UserName>
          <Message>
            <p>{message}</p>
          </Message>
        </NameAndMessage>
        <GroupInfoWrapper
          onClick={() =>
            navigate(`/chatroom/${group.state}/${group.id}`, {
              state: {
                chatRoomTitle: group.name,
                img: "/img/default.jpg",
                name: "전윤수",
                chatRoomState: group.state,
                chatRoomId: group.id,
              },
            })
          }
        >
          <GroupText>
            <Group />
            <span>{group.name}</span>
          </GroupText>
          <RightIcon />
        </GroupInfoWrapper>
      </ProfileInfoText>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  width: 33.5rem;
  height: 8.8rem;
  padding: 1.2rem 0;
  display: flex;
`;

const ProfileContainer = styled.div`
  width: 4rem;
  height: 100%;
  margin-right: 1.2rem;
`;

const ProfilePhoto = styled.div<{ $img: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0.8px solid ${(props) => props.theme.colors.gray5};
  background-image: url(${(props) => props.$img});
  background-size: cover;
  cursor: pointer;
`;

const ProfileInfoText = styled.div`
  width: 100%;
  height: 100%;
`;

const NameAndMessage = styled.div`
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  cursor: pointer;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  & > span {
    ${(props) => props.theme.fontStyles.body1};
    margin-right: 0.4rem;
  }
`;

const Message = styled.div`
  p {
    ${(props) => props.theme.fontStyles.body2};
    font-size: 1.4rem;
  }
`;

const GroupText = styled.div`
  display: flex;
  align-items: center;
  span {
    ${(props) => props.theme.fontStyles.body2};
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray2};
  }
`;

const GroupInfoWrapper = styled.div`
  width: 100%;
  height: 3.2rem;
  padding: 0.4rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.mainColorLight};
  border-radius: 0.4rem;
  cursor: pointer;
  span {
    margin-left: 0.4rem;
  }
`;
