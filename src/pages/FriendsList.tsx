import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Arrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as AddFriend } from "../icons/addfriend.svg";
import styled from "styled-components";
import SearchBar from "../components/friendList/SearchBar";
import Divider from "../components/common/Divider";
import { dividerState } from "../state/dividerState";
import MajorHeader from "../components/friendList/MajorHeader";
import PersonalInfo, {
  PersonalInfoProps,
} from "../components/friendList/PersonalInfo";
import { designerListData, developerListData } from "../data/friendListData";
import { searchByName } from "../customHooks/useSearchByName";
import theme from "../styles/theme";

export default function FriendsList() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchedDesignerList = searchByName<PersonalInfoProps>(
    designerListData,
    searchText
  );
  const searchedDeveloperList = searchByName<PersonalInfoProps>(
    developerListData,
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
      <Divider state={dividerState.LONGTHICK} />
      <FriendsListContainer>
        {searchedDesignerList.length > 0 ? (
          <DesignerListContainer>
            <MajorHeader
              people={searchedDesignerList.length}
              majorIn="Designer"
            />
            {searchedDesignerList.map((designerData, index) => (
              <PersonalInfo
                key={designerData.name + index}
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
            state={dividerState.SHORT}
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
              <PersonalInfo
                key={developerData.name + index}
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
