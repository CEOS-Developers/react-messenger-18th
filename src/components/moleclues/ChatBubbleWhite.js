import React from "react";
import { Text } from "../atom/Text";
import { Flex } from "../atom/Flex";
function ChatBubbleWhite() {
  return (
    <Flex
      borderRadius="16px 16px 16px 0px"
      gap="4"
      color="white"
      direction="column"
      padding="10px"
      align="flex-start"
      max-width="246px"
      self="flex-start"
    >
      <Text weight="400" size="14px" lineHeight="21px" align="right">
        홍대가려면 어떻게 해요?
      </Text>
      <Text
        font="Lato"
        weight="400"
        size="10px"
        lineHeight="16px"
        color="gray"
        type="div"
      >
        1:50pm
      </Text>
    </Flex>
  );
}

export default ChatBubbleWhite;
