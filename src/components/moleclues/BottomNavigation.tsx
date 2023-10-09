import React from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import groupIcon from "../../assets/images/groupIcon.svg";
import messageIcon from "../../assets/images/messageIcon.svg";
import horizontalIcon from "../../assets/images/horizontalIcon.svg";
function BottomNavigation() {
  return (
    <Flex justify="space-between" width="343px" margin="0 auto">
      <Flex width="58px" height="44px" justify="center" align="center">
        <Icon src={groupIcon} style={{ width: "32px", height: "32px" }} />
      </Flex>
      <Flex width="58px" height="44px" justify="center" align="center">
        <Icon src={messageIcon} style={{ width: "32px", height: "32px" }} />
      </Flex>
      <Flex width="58px" height="44px" justify="center" align="center">
        <Icon src={horizontalIcon} style={{ width: "32px", height: "32px" }} />
      </Flex>
    </Flex>
  );
}

export default BottomNavigation;
