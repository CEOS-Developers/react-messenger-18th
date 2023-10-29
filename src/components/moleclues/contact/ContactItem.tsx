import React from "react";
import { Flex } from "../../atom/Flex";
import { Text } from "../../atom/Text";
function ContactItem() {
  return (
    <Flex width="327px" height="68px" gap="12" bordercolor="offWhite">
      <Flex
        color="mainBlue"
        width="47px"
        height="48px"
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
        <Text
          width="241px"
          align="left"
          size="14px"
          lineheight="24px"
          weight="600"
        >
          영숙
        </Text>
        <Text color="gray" size="12px" lineheight="16px" align="left">
          좋은 하루
        </Text>
      </Flex>
    </Flex>
  );
}

export default ContactItem;
