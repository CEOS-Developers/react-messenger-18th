import React from "react";
import { Space } from "../../atom/Space";
import { Flex } from "../../atom/Flex";
import { Icon } from "../../atom/Icon";
import { Text } from "../../atom/Text";

function MyProfileLink({ icon, name }) {
  return (
    <>
      <Flex>
        <Space width="16px" />
        <Flex align="center" height="55px">
          <Icon
            src={icon}
            alt="아이콘"
            style={{ width: "40px", height: "40px" }}
          />
        </Flex>
        <Space width="16px" />
        <Flex align="center">
          <Text size="14px" weight="600">
            {name}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default MyProfileLink;
