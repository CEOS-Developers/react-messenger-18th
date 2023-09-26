import React, { useState } from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import { Input } from "../atom/Input";
import mediaAddIcon from "../../assets/images/미디어추가.svg";
import voiceAddIcon from "../../assets/images/음성아이콘.svg";
import { Text } from "../atom/Text";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isUser1State,
  user1MessageState,
  user2MesasgeState,
} from "../../recoil/atom.ts";

import { handleKeyDown } from "../../hooks/handleKeyDown"; 

function ChatInput() {
  const [inputMessage, setInputMessage] = useState("");
  const isUser1 = useRecoilValue(isUser1State);
  const [user1Message, setUser1Message] = useRecoilState(user1MessageState);
  const [user2Message, setUser2Message] = useRecoilState(user2MesasgeState);

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  const onKeyDown = (event) => {
    handleKeyDown(
      event,
      inputMessage,
      isUser1,
      setUser1Message,
      user1Message,
      setUser2Message,
      user2Message,
      setInputMessage
    );
  };

  return (
    <Flex width="375px" justify="center" height="56px">
      <Flex gap="12">
        <Icon src={mediaAddIcon} />
        <Input
          width="279px"
          bgColor="chatBackground"
          color="gray"
          value={inputMessage}
          onKeyDown={onKeyDown}
          onChange={handleChange}
        >
          <Text />
        </Input>
        <Icon src={voiceAddIcon} />
      </Flex>
    </Flex>
  );
}

export default ChatInput;
