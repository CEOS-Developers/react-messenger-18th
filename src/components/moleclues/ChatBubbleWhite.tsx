import React from "react";
import { Text } from "../atom/Text";
import { Flex } from "../atom/Flex";

interface ChatBubbleWhiteProps {
  text: string;
  time: string;
}

function ChatBubbleWhite({ text, time }: ChatBubbleWhiteProps) {
  return (
    <Flex
      radius="16px 16px 16px 0px"
      gap="4"
      color="white"
      direction="column"
      padding="10px"
      align="flex-start"
      maxwidth="266px"
      self="flex-start"
    >
      <Flex self="flex-start">
        <Text
          weight="400"
          size="14px"
          lineheight="21px"
          align="left"
          self="flex-start"
        >
          {text}
        </Text>
      </Flex>
      <Text font="Lato" weight="400" size="10px" lineheight="16px" color="gray">
        {time}
      </Text>
    </Flex>
  );
}

export default ChatBubbleWhite;
