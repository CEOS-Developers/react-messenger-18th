import React from "react";
import HomeHeader from "../organism/HomeHeader";
import ContactList from "../organism/contact/ContactList";
import HomeFooter from "../organism/HomeFooter";
import MyProfileContainer from "../organism/profile/MyProfileContainer";
import MyUtilContainer from "../organism/profile/MyUtilContainer";
import MyLinkContainer from "../organism/profile/MyLinkContainer";
function ProfileTemplate() {
  return (
    <>
      <HomeHeader title="내프로필" isBorder={false} />
      <MyProfileContainer />
      <MyLinkContainer />
      <MyUtilContainer />
      <HomeFooter />
    </>
  );
}

export default ProfileTemplate;
