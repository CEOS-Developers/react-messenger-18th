import React from "react";
import { Flex } from "../atom/Flex";
import { Space } from "../atom/Space";
import { Text } from "../atom/Text";
import status from "../../assets/images/상태바.svg";
function StatusBar() {
  return (
    <>
      <Flex justify="space-between" width="343px">
        <Flex>
          <Space width="6px" />
          <Text fontSize="15px" lineHeight="21px" font="Segoe" weight="500">
            9:41
          </Text>
          <Space width="6px" />
        </Flex>
        <img src={status} style={{ width: "67px" }} alt="핸드폰 기본상태"></img>
      </Flex>
    </>
  );
}

export default StatusBar;
