import React from "react";
import HomeHeader from "../organism/HomeHeader";
import ContactList from "../organism/contact/ContactList";
import HomeFooter from "../organism/HomeFooter";
import MyProfileContainer from "../organism/profile/MyProfileContainer";
import MyUtilContainer from "../organism/profile/MyUtilContainer";
import MyLinkContainer from "../organism/profile/MyLinkContainer";
import { isSearchState } from "../../recoil/atom";
import SearchContainer from "../moleclues/SearchContainer";
import { useRecoilValue } from "recoil";
function ProfileTemplate() {
  const isSearch = useRecoilValue(isSearchState);
  return (
    <>
      <HomeHeader title="내프로필" isBorder={false} />
      {isSearch ? (
        <SearchContainer />
      ) : (
        <>
          <MyProfileContainer />
          <MyLinkContainer />
          <MyUtilContainer />
        </>
      )}
      <HomeFooter />
    </>
  );
}

export default ProfileTemplate;
