import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PageHeader, Divider, SearchBar } from "@common/components";
import { DIVIDER_TYPE } from "@common/constants";
import { searchByName } from "@common/utils";
import { ReactComponent as Arrow } from "@common/icons/arrows/leftarrow.svg";
import { ReactComponent as Search } from "@common/icons/search.svg";
import { ReactComponent as AddFriend } from "@common/icons/addfriend.svg";
import {
  MajorHeader,
  defaultDesignerList,
  defaultDeveloperList,
  PersonalInfoBox,
} from "@features/friend";
import { PersonalInfoBoxProps } from "@features/friend/components/PersonalInfoBox/PersonalInfoBox";
import theme from "@styles/theme";

export function FriendsList() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchedDesignerList = searchByName<PersonalInfoBoxProps>(
    defaultDesignerList,
    searchText
  );
  const searchedDeveloperList = searchByName<PersonalInfoBoxProps>(
    defaultDeveloperList,
    searchText
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
        <SearchBarWrapper>
          <SearchBar search={[searchText, setSearchText]} />
        </SearchBarWrapper>
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
        {searchedDesignerList.length > 0 && searchedDeveloperList.length > 0 ? (
          <Divider
            state={DIVIDER_TYPE.SHORT}
            $addClass={`background-color:${theme.colors.gray5}`}
          />
        ) : null}
        {searchedDeveloperList.length > 0 ? (
          <DeveloperListContainer>
            <MajorHeader
              people={searchedDeveloperList.length}
              majorIn="Frontend"
            />
            {searchedDeveloperList.map((developerData, index) => (
              <PersonalInfoBox
                key={developerData.name + index}
                id={developerData.id}
                img={developerData.img}
                name={developerData.name}
                message={developerData.message}
                group={developerData.group}
                majorIn={developerData.majorIn}
              />
            ))}
          </DeveloperListContainer>
        ) : null}
      </FriendsListContainer>
    </>
  );
}

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const FriendsListContainer = styled.div`
  padding: 0 2rem;
`;

const DesignerListContainer = styled.div`
  margin-bottom: 0.8rem;
  padding-top: 2rem;
`;

const DeveloperListContainer = styled.div`
  padding-top: 2rem;
`;
