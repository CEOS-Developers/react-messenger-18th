import React from "react";
import StatusBar from "../moleclues/StatusBar";
import HomeNav from "../moleclues/HomeNav";
import { Flex } from "../atom/Flex";

function HomeHeader({ title }) {
  return (
    <Flex
      direction="column"
      gap="14"
      height="90px"
      justify="center"
      bordercolor="offWhite"
    >
      <StatusBar />
      <HomeNav title={title} />
    </Flex>
  );
}

export default HomeHeader;
