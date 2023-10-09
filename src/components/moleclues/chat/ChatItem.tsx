import React from "react";
import { Flex } from "../../atom/Flex";
import { Text } from "../../atom/Text";

function ChatItem() {
  return (
    <>
      <Flex width="327px" height="56px" margin="0 auto" gap="12">
        <Flex
          color="mainBlue"
          width="47px"
          height="48px"
          self="center"
          align="center"
          justify="center"
          margin="4px"
          radius="4px"
        >
          <Text color="white" font="Lato" weight="700">
            김
          </Text>
        </Flex>
        <Flex direction="column">
          <Flex>
            <Text width="241px" align="left" size="14px" lineheight="24px">
              김철수
            </Text>
            <Text color="gray" size="10px" lineheight="16px">
              오늘
            </Text>
          </Flex>
          <Flex>
            <Text
              color="gray"
              width="236px"
              align="left"
              size="12px"
              lineheight="20px"
            >
              좋은 저녁입니다.
            </Text>
            <Flex
              width="23px"
              justify="center"
              align="center"
              color="lightBlue"
              radius="40px"
            >
              <Text color="mainBlue" size="10px" weight="600">
                2
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ChatItem;
