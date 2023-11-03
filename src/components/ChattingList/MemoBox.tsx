import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../assets/styles/color";

//img
import memocreate from "../../assets/images/mymemo.svg";
import memobubble from "../../assets/images/othermemo.svg";

interface MemoBoxProps {
  user: {
    id: number;
    userID: string;
    profileImage: string;
    memo: string;
    userName: string;
  };
}

const MemoBox = ({ user }: MemoBoxProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const isMe: boolean = user.id == 0;

  const handleBubbleClick = () => {
    setIsEditing((prevState) => !prevState);
  };
  return (
    <Container>
      {isMe ? (
        //isEditing 상태 따라서 style 바꾸기
        <MyMemoBubble src={isEditing ? memobubble : memocreate} />
      ) : (
        <MemoBubble src={memobubble} />
      )}
      {!isMe && user.memo && (
        <div className="memo">
          <MemoContent>{user.memo}</MemoContent>
        </div>
      )}
      <Profile src={user.profileImage} />
      <Nicname>{isMe ? "내 메모" : user.userName}</Nicname>
    </Container>
  );
};

export default MemoBox;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .memo {
    position: absolute;
    width: 70px;
    height: 20px;
    top: 20px;
    left: 0;
    z-index: 5;
  }
`;

const MemoBubble = styled.img`
  position: absolute;
  width: 100px;
  flex-shrink: 0;
  top: 0px;
  left: -14px;
  z-index: 3;
`;

const MyMemoBubble = styled(MemoBubble)`
  top: 0px;
  left: -6px;
  width: 55px;
`;

const MemoContent = styled.span``;

const Profile = styled.img`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  object-fit: cover;

  margin: 38px 0 0;

  border-radius: 50%;
  border: 0.7px solid ${color.grey3};
`;

const Nicname = styled.div`
  margin-top: 4px;

  color: #000;
  text-align: center;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
