import React from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import { Input } from "../atom/Input";
import mediaAddIcon from "../../assets/images/미디어추가.svg";
import voiceAddIcon from "../../assets/images/음성아이콘.svg";
import { Text } from "../atom/Text";
function ChatInput() {
  return (
    <Flex width="375px" justify="center" height="56px">
      <Flex gap="12">
        <Icon src={mediaAddIcon} />
        <Input width="279px" bgColor="chatBackground" color="gray">
          <Text />
        </Input>
        <Icon src={voiceAddIcon} />
      </Flex>
    </Flex>
  );
}

export default ChatInput;
