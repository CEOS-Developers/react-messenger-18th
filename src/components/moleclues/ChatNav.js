import React from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import { Text } from "../atom/Text";
import chatAddIcon from "../../assets/images/채팅추가.svg";
import searchIcon from "../../assets/images/검색.svg";
import backIcon from "../../assets/images/뒤로가기.svg";
import { useRecoilState } from "recoil";
import { isUser1State } from "../../recoil/atom.ts";
function ChatNav() {
  const [isUser1, setIsUser1] = useRecoilState(isUser1State);
  const toggleUser = () => {
    setIsUser1(!isUser1);
  };
  return (
    <Flex gap="8" height="30px" justify="center">
      <Icon src={backIcon}></Icon>
      <Flex width="247px">
        <Text
          size="18px"
          lineHeight="30px"
          font="Pretendard"
          weight="600"
          onClick={toggleUser}
        >
          {isUser1 ? "정인영" : "이한영"}
        </Text>
      </Flex>
      <Icon src={chatAddIcon} />
      <Icon src={searchIcon} />
    </Flex>
  );
}

export default ChatNav;
