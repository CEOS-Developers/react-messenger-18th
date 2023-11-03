import React from "react";
import MyProfileMain from "../../moleclues/profile/MyProfileMain";
import MyProfileMenu from "../../moleclues/profile/MyProfileMenu";
import personIcon from "../../../assets/images/personIcon.svg";
import { Space } from "../../atom/Space";
import { Flex } from "../../atom/Flex";
function MyProfileContainer() {
  return (
    <>
      <Space height="8px" />
      <MyProfileMain />
      <MyProfileMenu name="계정" icon={personIcon} />
    </>
  );
}

export default MyProfileContainer;
