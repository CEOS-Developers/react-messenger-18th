import React from "react";
import MyProfileLink from "../../moleclues/profile/MyProfileLink";
import instagramIcon from "../../../assets/images/instagramIcon.svg";
import naverIcon from "../../../assets/images/naverIcon.svg";
import { Flex } from "../../atom/Flex";
import { Space } from "../../atom/Space";
function MyLinkContainer() {
  return (
    <>
      <Space height="20px" />
      <MyProfileLink icon={instagramIcon} name="인스타그램" />
      <Space height="8px" />
      <MyProfileLink icon={naverIcon} name="네이버" />
    </>
  );
}

export default MyLinkContainer;
