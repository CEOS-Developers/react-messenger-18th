import React from "react";
import { Flex } from "../atom/Flex";
import { Space } from "../atom/Space";
import { Text } from "../atom/Text";
import statusIcon from "../../assets/images/statusIcon.svg";
import { getTime } from "../../hooks/getTime";

function StatusBar() {
  return (
    <>
      <Flex justify="space-between" width="343px" margin="0 auto">
        <Flex>
          <Space width="6px" />
          <Text size="15px" lineheight="21px" font="Segoe" weight="500">
            {getTime("HH:mm")}
          </Text>
          <Space width="6px" />
        </Flex>
        <img
          src={statusIcon}
          style={{ width: "67px" }}
          alt="핸드폰 기본상태"
        ></img>
      </Flex>
    </>
  );
}

export default StatusBar;
