import React, { useEffect, useRef, useState } from "react";
import { Flex } from "../../atom/Flex";
import { Icon } from "../../atom/Icon";
import { Input } from "../../atom/Input";
import mediaAddIcon from "../../../assets/images/mediaAddIcon.svg";
import voiceAddIcon from "../../../assets/images/voiceAddIcon.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  firstRoomState,
  secondRoomState,
  userAMessageState,
  userBMesasgeState,
  userCMessageState,
  userDMesasgeState,
} from "../../../recoil/atom";

import { handleKeyDown } from "../../../hooks/handleKeyDown";
import { useParams } from "react-router-dom";

function ChatInput() {
  const params = useParams();
  const [inputMessage, setInputMessage] = useState("");
  const isUser1InFirstRoom = useRecoilValue(firstRoomState);
  const isUser1InSecondRoom = useRecoilValue(secondRoomState);
  const [userAMessage, setUserAMessage] = useRecoilState(userAMessageState);
  const [userBMessage, setUserBMessage] = useRecoilState(userBMesasgeState);
  const [userCMessage, setUserCMessage] = useRecoilState(userCMessageState);
  const [userDMessage, setUserDMessage] = useRecoilState(userDMesasgeState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (params.roomID === "1") {
      handleKeyDown(
        event,
        inputMessage,
        isUser1InFirstRoom,
        setUserAMessage,
        userAMessage,
        setUserBMessage,
        userBMessage,
        setInputMessage
      );
    } else if (params.roomID === "2") {
      handleKeyDown(
        event,
        inputMessage,
        isUser1InSecondRoom,
        setUserCMessage,
        userCMessage,
        setUserDMessage,
        userDMessage,
        setInputMessage
      );
    }
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Flex width="375px" justify="center" height="56px">
      <Flex gap="12" align="center">
        <Icon src={mediaAddIcon} />
        <Input
          width="279px"
          bgcolor="chatBackground"
          color="gray"
          value={inputMessage}
          onKeyDown={onKeyDown}
          onChange={handleChange}
          inputRef={inputRef}
        ></Input>
        <Icon src={voiceAddIcon} />
      </Flex>
    </Flex>
  );
}

export default ChatInput;
