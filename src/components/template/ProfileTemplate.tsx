import React from "react";
import HomeHeader from "../organism/HomeHeader";
import ContactList from "../organism/contact/ContactList";
import HomeFooter from "../organism/HomeFooter";
import MyProfileContainer from "../organism/profile/MyProfileContainer";
import MyUtilContainer from "../organism/profile/MyUtilContainer";
import MyLinkContainer from "../organism/profile/MyLinkContainer";
import { useRecoilValue } from "recoil";
import { isSearchState } from "../../recoil/atom";
import SearchContainer from "../moleclues/SearchContainer";

function ProfileTemplate() {
  const isSearch: boolean = useRecoilValue(isSearchState);

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
