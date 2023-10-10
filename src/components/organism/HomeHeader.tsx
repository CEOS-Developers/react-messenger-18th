import React from "react";
import StatusBar from "../moleclues/StatusBar";
import HomeNav from "../moleclues/HomeNav";
import { Flex } from "../atom/Flex";

function HomeHeader({ title, isBorder }) {
  return (
    <Flex
      direction="column"
      gap="14"
      height="90px"
      justify="center"
      bordercolor={`${isBorder ? "offwhite" : "none"}`}
    >
      <StatusBar />
      <HomeNav title={title} />
    </Flex>
  );
}

export default HomeHeader;
