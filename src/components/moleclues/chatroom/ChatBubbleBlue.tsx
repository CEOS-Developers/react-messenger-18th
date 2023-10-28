import React from "react";
import { Text } from "../../atom/Text";
import { Flex } from "../../atom/Flex";

interface ChatBubbleBlueProps {
  text: string;
  time: string;
  isRead: boolean;
}

function ChatBubbleBlue({ text, time, isRead }: ChatBubbleBlueProps) {
  return (
    <Flex
      radius="16px 16px 0px 16px"
      gap="4"
      direction="column"
      padding="10px"
      align="flex-end"
      color="chatBlue"
      maxwidth="266px"
      self="flex-end"
    >
      <Text
        weight="400"
        size="14px"
        lineheight="21px"
        color="white"
        align="left"
        self="flex-start"
      >
        {text}
      </Text>
      <Text
        font="Lato"
        weight="400"
        size="10px"
        lineheight="16px"
        color="white"
      >
        {time} {isRead ? "· 읽음" : ""}
      </Text>
    </Flex>
  );
}

export default ChatBubbleBlue;
