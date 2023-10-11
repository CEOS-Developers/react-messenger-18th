import React from "react";
import { Flex } from "../../atom/Flex";
import { Icon } from "../../atom/Icon";
import { Text } from "../../atom/Text";
import chatAddIcon from "../../../assets/images/chatAddIcon.svg";
import searchIcon from "../../../assets/images/serachIcon.svg";
import backIcon from "../../../assets/images/backIcon.svg";
import { useRecoilState } from "recoil";
import { isUser1State } from "../../../recoil/atom";

function ChatNav() {
  const [isUser1, setIsUser1] = useRecoilState(isUser1State);
  const toggleUser = () => {
    setIsUser1(!isUser1);
  };
  return (
    <Flex
      gap="8"
      height="30px"
      justify="center"
      align="center"
      width="327px"
      margin="0 auto"
    >
      <Icon src={backIcon}></Icon>
      <Flex width="247px">
        <Text
          size="18px"
          lineheight="30px"
          font="Pretendard"
          weight="600"
          onClick={toggleUser}
        >
          {isUser1 ? "정인영" : "이현진"}
        </Text>
      </Flex>
      <Icon src={chatAddIcon} />
      <Icon src={searchIcon} />
    </Flex>
  );
}

export default ChatNav;
