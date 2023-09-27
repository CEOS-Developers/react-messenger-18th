import React from "react";
import { Text } from "../atom/Text";
import { Flex } from "../atom/Flex";
function ChatBubbleBlue({ text, time }) {
  return (
    <Flex
      borderRadius="16px 16px 0px 16px"
      gap="4"
      direction="column"
      padding="10px"
      align="flex-end"
      color="chatBlue"
      maxWidth="266px"
      self="flex-end"
    >
      <Text
        weight="400"
        size="14px"
        lineHeight="21px"
        color="white"
        align="left"
      >
        {text}
      </Text>
      <Text
        font="Lato"
        weight="400"
        size="10px"
        lineHeight="16px"
        color="white"
        type="div"
      >
        {time} · 읽음
      </Text>
    </Flex>
  );
}

export default ChatBubbleBlue;
