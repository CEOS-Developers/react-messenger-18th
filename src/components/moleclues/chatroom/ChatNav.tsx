import React, { useState } from "react";
import { Flex } from "../../atom/Flex";
import { Icon } from "../../atom/Icon";
import { Text } from "../../atom/Text";
import chatAddIcon from "../../../assets/images/chatAddIcon.svg";
import searchIcon from "../../../assets/images/serachIcon.svg";
import backIcon from "../../../assets/images/backIcon.svg";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import {
  firstRoomState,
  secondRoomState,
  userAMessageState,
  userBMesasgeState,
  userCMessageState,
  userDMesasgeState,
} from "../../../recoil/atom";

function ChatNav() {
  const [isUser1InFirstRoom, setIsUser1InFirstRoom] =
    useRecoilState(firstRoomState);
  const [isUser1InSecondRoom, setIsUser1InSecondRoom] =
    useRecoilState(secondRoomState);
  const [userAMessage, setUserAMessage] = useRecoilState(userAMessageState);
  const [userBMessage, setUserBMessage] = useRecoilState(userBMesasgeState);
  const [userCMessage, setUserCMessage] = useRecoilState(userCMessageState);
  const [userDMessage, setUserDMessage] = useRecoilState(userDMesasgeState);
  const params = useParams();

  // 현재는 채팅방이 2개 밖에 없기 때문에 삼항 연산자를 통해 채팅방 내비게이션의 모습을 결정함
  const partnerName = params.roomID === "1" ? "이현진" : "김종완";
  const toggleUser = () => {
    // 유저 전환
    params.roomID === "1"
      ? setIsUser1InFirstRoom(!isUser1InFirstRoom)
      : setIsUser1InSecondRoom(!isUser1InSecondRoom);
    // 메시지읽음 표시
    if (params.roomID === "1") {
      setUserAMessage(userAMessage.map((obj) => ({ ...obj, isRead: true })));
      setUserBMessage(userBMessage.map((obj) => ({ ...obj, isRead: true })));
    } else if (params.roomID === "2") {
      setUserCMessage(userCMessage.map((obj) => ({ ...obj, isRead: true })));
      setUserDMessage(userDMessage.map((obj) => ({ ...obj, isRead: true })));
    }
  };
  const navigate = useNavigate();
  const goChat = () => {
    navigate("/chat");
  };
  return (
    <Flex
      gap="8"
      height="30px"
      justify="center"
      align="center"
      width="327px"
      margin="0 auto"
    >
      <Icon src={backIcon} onClick={goChat}></Icon>
      <Flex width="247px">
        <Text
          size="18px"
          lineheight="30px"
          font="Pretendard"
          weight="600"
          onClick={toggleUser}
        >
          {params.roomID === "1"
            ? isUser1InFirstRoom
              ? `${partnerName}`
              : "정인영"
            : isUser1InSecondRoom
            ? `${partnerName}`
            : "정인영"}
        </Text>
      </Flex>
      <Icon src={chatAddIcon} />
      <Icon src={searchIcon} />
    </Flex>
  );
}

export default ChatNav;
