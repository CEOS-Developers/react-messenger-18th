import React from "react";
import { Flex } from "../atom/Flex";
import ChatBubbleBlue from "../moleclues/ChatBubbleBlue";
import ChatBubbleWhite from "../moleclues/ChatBubbleWhite";
import { Space } from "../atom/Space";

function ChatArea() {
  const 로컬스토리지 = {
    보낸사용자: [
      ["13:03", "뉴진스의 하입보이요"],
      ["13:50", "흥 웃기는 소리 하입보이 내가 전해"],
    ],
    받은사용자: [
      "홍대가려면 어떻게 해야 해요?",
      "당신은 심각한 뉴진스 중독입니다.",
      "멤버 전원이 그룹이 추구하는 음악에 완벽히 걸맞는 음색과 음악적 기술을 가지고 있다고 평가받는다. 곡을 녹음할 때 가이드 보컬을 사용하지 않아 뉴진스만의 음악 스타일을 형성하는 데에 있어 보컬 또한 큰 기여를 하고 있으며, 멤버들이 가진 음색이 예쁘면서도  각자 다른 개성이 있어 각기 다른 스타일에도 잘 맞는 편이며 그 중에서도 팝이나 R&B 스타일에서 두각을 나타낸다.",
    ],
  };

  return (
    <Flex color="chatBackground" borderBottom="1px" borderColor="offWhite">
      <Flex
        width="95%"
        height="639px"
        direction="column"
        gap="22"
        overflow="scroll"
        margin="0px 16px 0px"
      >
        <Space height="25px" />

        <ChatBubbleWhite />
        <ChatBubbleBlue />
        <ChatBubbleWhite />
        <ChatBubbleBlue />
        <ChatBubbleWhite />
        <ChatBubbleBlue />

        <Space height="42px" />
      </Flex>
    </Flex>
  );
}

export default ChatArea;
