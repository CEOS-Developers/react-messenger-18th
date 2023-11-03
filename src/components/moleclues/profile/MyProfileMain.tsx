import React from "react";
import { Flex } from "../../atom/Flex";
import { Icon } from "../../atom/Icon";
import { Text } from "../../atom/Text";
import { Space } from "../../atom/Space";
import personIcon from "../../../assets/images/personIcon.svg";
import rightIcon from "../../../assets/images/rightIcon.svg";
function ProfileItem() {
  return (
    <>
      <Space height="16px" />
      <Flex gap="20" width="343px" margin="0 auto">
        <Flex
          width="49px"
          height="50px"
          radius="50px"
          color="offWhite"
          justify="center"
          align="center"
        >
          <Icon src={personIcon} alt="프로필 아이콘" />
        </Flex>
        <Flex direction="column" grow="1">
          <Text lineheight="24px" size="14px" weight="700">
            정인영
          </Text>
          <Space height="2px"></Space>
          <Text color="gray" size="12px" lineheight="20px">
            010-8324-0112
          </Text>
        </Flex>
        <Flex align="center">
          <Icon src={rightIcon} />
        </Flex>
      </Flex>
      <Space height="16px" />
    </>
  );
}

export default ProfileItem;
