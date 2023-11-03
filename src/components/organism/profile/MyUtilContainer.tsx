import React from "react";
import MyProfileMenu from "../../moleclues/profile/MyProfileMenu";
import bellIcon from "../../../assets/images/bellIcon.svg";
import securityIcon from "../../../assets/images/securityIcon.svg";
import helpIcon from "../../../assets/images/helpIcon.svg";
import { Space } from "../../atom/Space";
import { Flex } from "../../atom/Flex";
import DivideLine from "../../moleclues/profile/DivideLine";
function MyUtilContainer() {
  return (
    <>
      <Space height="12px" />
      <MyProfileMenu name="알림" icon={bellIcon} />
      <Space height="8px" />
      <MyProfileMenu name="보안" icon={securityIcon} />
      <DivideLine />
      <MyProfileMenu name="도움" icon={helpIcon} />
    </>
  );
}

export default MyUtilContainer;
