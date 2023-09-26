import React from "react";
import { Text } from "../atom/Text";
import { Flex } from "../atom/Flex";
function ChatBubbleBlue() {
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
        멤버 전원이 그룹이 추구하는 음악에 완벽히 걸맞는 음색과 음악적 기술을
        가지고 있다고 평가받는다. 곡을 녹음할 때 가이드 보컬을 사용하지 않아
        '뉴진스'만의 음악 스타일을 형성하는 데에 있어 보컬 또한 큰 기여를 하고
        있으며, 멤버들이 가진 음색이 예쁘면서도 각자 다른 개성이 있어 각기 다른
        스타일에도 잘 맞는 편이며 그 중에서도 팝이나 R&B 스타일에서 두각을
        나타낸다.
      </Text>
      <Text
        font="Lato"
        weight="400"
        size="10px"
        lineHeight="16px"
        color="white"
        type="div"
      >
        1:50 pm · 읽음
      </Text>
    </Flex>
  );
}

export default ChatBubbleBlue;
