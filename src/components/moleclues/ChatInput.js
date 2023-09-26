import React from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import { Input } from "../atom/Input";
import mediaAddIcon from "../../assets/images/미디어추가.svg";
import voiceAddIcon from "../../assets/images/음성아이콘.svg";
import { Text } from "../atom/Text";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isUser1State,
  user1MessageState,
  user2MesasgeState,
} from "../../recoil/atom.ts";

function ChatInput() {
  const [inputMessage, setInputMessage] = useState("");
  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };
  const getTime = () => {};
  const isUser1 = useRecoilValue(isUser1State);
  const [user1Message, setUser1Message] = useRecoilState(user1MessageState);
  const [user2Message, setUser2Message] = useRecoilState(user2MesasgeState);
  console.log(user1Message);

  const handleKeyDown = (event) => {
    // 한글 입력시 두 번 입력 방지
    if (event.nativeEvent.isComposing) {
      return;
    }
    if (event.key === "Enter") {
      if (inputMessage.trim().length > 0) {
        if (isUser1) {
          const newMessage = { time: getTime(), text: inputMessage };
          setUser1Message([...user1Message, newMessage]);
          localStorage.setItem("user1Message", JSON.stringify(user1Message));
        } else {
          const newMessage = { time: getTime(), text: inputMessage };
          setUser2Message([...user2Message, newMessage]);
          localStorage.setItem("user2Message", JSON.stringify(user2Message));
        }
        setInputMessage("");
      }
    }
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
          onKeyDown={handleKeyDown}
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
