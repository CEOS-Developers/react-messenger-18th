import React from "react";
import BottomLine from "../moleclues/BottomLine";
import StatusBar from "../moleclues/StatusBar";
import BottomNavigation from "../moleclues/BottomNavigation";
import { Flex } from "../atom/Flex";
import { Space } from "../atom/Space";

function HomeFooter() {
  return (
    <Flex direction="column">
      <BottomNavigation />
      <Space height="5px" />
      <BottomLine />
    </Flex>
  );
}

export default HomeFooter;
