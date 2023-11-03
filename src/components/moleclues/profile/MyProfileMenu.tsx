import React from "react";
import { Space } from "../../atom/Space";
import { Flex } from "../../atom/Flex";
import { Icon } from "../../atom/Icon";
import { Text } from "../../atom/Text";
import personIcon from "../../../assets/images/personIcon.svg";
import rightIcon from "../../../assets/images/rightIcon.svg";

interface MyProfileMenuProps {
  icon: string;
  name: string;
}

function MyProfileMenu({ icon, name }: MyProfileMenuProps) {
  return (
    <>
      <Space height="8px" />
      <Flex justify="center">
        <Flex align="center" width="343px" gap="6">
          <Icon src={icon} />
          <Flex grow="1">
            <Text weight="600" size="14px">
              {name}
            </Text>
          </Flex>
          <Icon src={rightIcon} />
        </Flex>
      </Flex>
      <Space height="8px" />
    </>
  );
}

export default MyProfileMenu;
