import React from "react";
import BottomLine from "../moleclues/BottomLine";
import BottomNavigation from "../moleclues/BottomNavigation";
import { Flex } from "../atom/Flex";
import { Space } from "../atom/Space";

function HomeFooter() {
  return (
    <Flex
      direction="column"
      shadow="0px -1px 24px 0px rgba(0, 0, 0, 0.04)"
      position="absolute"
      bottom="0px"
    >
      <BottomNavigation />
      <Space height="5px" />
      <BottomLine />
    </Flex>
  );
}

export default HomeFooter;
