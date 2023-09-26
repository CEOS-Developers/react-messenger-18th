import React from "react";
import { Text } from "../atom/Text";
import { Flex } from "../atom/Flex";
function ChatBubbleWhite({ text, time }) {
  return (
    <Flex
      borderRadius="16px 16px 16px 0px"
      gap="4"
      color="white"
      direction="column"
      padding="10px"
      align="flex-start"
      maxWidth="266px"
      self="flex-start"
    >
      <Text weight="400" size="14px" lineHeight="21px" align="left">
        {text}
      </Text>
      <Text
        font="Lato"
        weight="400"
        size="10px"
        lineHeight="16px"
        color="gray"
        type="div"
      >
        {time}
      </Text>
    </Flex>
  );
}

export default ChatBubbleWhite;
