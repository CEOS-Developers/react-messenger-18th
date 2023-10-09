import React from "react";
import { Flex } from "../atom/Flex";
import { Text } from "../atom/Text";
import { Icon } from "../atom/Icon";
import chatAddIcon from "../../assets/images/chatAddIcon.svg";
import searchIcon from "../../assets/images/serachIcon.svg";

function HomeNav({ title }) {
  return (
    <>
      <Flex align="center" gap="8" height="30px" justify="center">
        <Flex width="263px">
          <Text size="18px" lineheight="30px" font="Pretendard" weight="600">
            {title}
          </Text>
        </Flex>
        <Icon src={chatAddIcon} />
        <Icon src={searchIcon} />
      </Flex>
    </>
  );
}

export default HomeNav;
