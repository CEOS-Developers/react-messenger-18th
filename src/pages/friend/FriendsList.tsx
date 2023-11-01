import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PageHeader, Divider, SearchBar } from "@common/components";
import { DIVIDER_TYPE, MAJOR_TYPE } from "@common/constants";
import { filterByCategory, searchByName } from "@common/utils";
import { ReactComponent as Arrow } from "@common/icons/arrows/leftarrow.svg";
import { ReactComponent as Search } from "@common/icons/search.svg";
import { ReactComponent as AddFriend } from "@common/icons/addfriend.svg";
import {
  MajorHeader,
  PersonalInfoBox,
  defaultFriendsList,
} from "@features/friend";
import theme from "@styles/theme";

export function FriendsList() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchedFriendsList = searchByName(defaultFriendsList, searchText);
  const searchedDesignerList = filterByCategory(
    searchedFriendsList,
    "majorIn",
    MAJOR_TYPE.DESIGNER
  );
  const searchedFrontEndList = filterByCategory(
    searchedFriendsList,
    "majorIn",
    MAJOR_TYPE.FRONTEND
  );
  return (
    <>
      <PageHeader
        leftIcon={<Arrow onClick={() => navigate(-1)} />}
        title="친구"
        rightIcon1={
          <Search onClick={() => setShowSearchBar((prev) => !prev)} />
        }
        rightIcon2={<AddFriend style={{ marginLeft: "1.2rem" }} />}
      />
      {showSearchBar ? (
        <SearchBar search={[searchText, setSearchText]} />
      ) : null}
      <Divider state={DIVIDER_TYPE.LONGTHICK} />
      <FriendsListContainer>
        {searchedDesignerList.length > 0 ? (
          <DesignerListContainer>
            <MajorHeader
              people={searchedDesignerList.length}
              majorIn="Designer"
            />
            {searchedDesignerList.map((designerData, index) => (
              <PersonalInfoBox
                key={designerData.name + index}
                id={designerData.id}
                img={designerData.img}
                name={designerData.name}
                message={designerData.message}
                group={designerData.group}
                majorIn={designerData.majorIn}
              />
            ))}
          </DesignerListContainer>
        ) : null}
        {searchedDesignerList.length > 0 && searchedFrontEndList.length > 0 ? (
          <Divider
            state={DIVIDER_TYPE.SHORT}
            $addClass={`background-color:${theme.colors.gray5}`}
          />
        ) : null}
        {searchedFrontEndList.length > 0 ? (
          <FrontEndListContainer>
            <MajorHeader
              people={searchedFrontEndList.length}
              majorIn="Frontend"
            />
            {searchedFrontEndList.map((frontEndData, index) => (
              <PersonalInfoBox
                key={frontEndData.name + index}
                id={frontEndData.id}
                img={frontEndData.img}
                name={frontEndData.name}
                message={frontEndData.message}
                group={frontEndData.group}
                majorIn={frontEndData.majorIn}
              />
            ))}
          </FrontEndListContainer>
        ) : null}
      </FriendsListContainer>
    </>
  );
}

const FriendsListContainer = styled.div`
  padding: 0 2rem;
`;

const DesignerListContainer = styled.div`
  margin-bottom: 0.8rem;
  padding-top: 2rem;
`;

const FrontEndListContainer = styled.div`
  padding-top: 2rem;
`;
