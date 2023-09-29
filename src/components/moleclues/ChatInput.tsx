import React, { useEffect, useRef, useState } from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import { Input } from "../atom/Input";
import mediaAddIcon from "../../assets/images/미디어추가.svg";
import voiceAddIcon from "../../assets/images/음성아이콘.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isUser1State,
  user1MessageState,
  user2MesasgeState,
} from "../../recoil/atom";

import { handleKeyDown } from "../../hooks/handleKeyDown";

function ChatInput() {
  const [inputMessage, setInputMessage] = useState("");
  const isUser1 = useRecoilValue(isUser1State);
  const [user1Message, setUser1Message] = useRecoilState(user1MessageState);
  const [user2Message, setUser2Message] = useRecoilState(user2MesasgeState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Flex width="375px" justify="center" height="56px" align="center">
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
