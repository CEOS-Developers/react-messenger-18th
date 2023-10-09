import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Arrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as AddFriend } from "../icons/addfriend.svg";
import styled from "styled-components";
import SearchBar from "../components/friendList/SearchBar";
import Divider from "../components/common/Divider";
import { dividerState } from "../state/dividerState";
import MajorHeader from "../components/friendList/MajorHeader";
import PersonalInfo from "../components/friendList/PersonalInfo";
import {
  designerListState,
  developerListState,
} from "../state/friendListState";

export default function FriendsList() {
  const navigate = useNavigate();
  const arrowIconClicked = () => {
    navigate(-1);
  };
  return (
    <>
      <PageHeader
        leftIcon={<Arrow onClick={arrowIconClicked} />}
        title="친구"
        rightIcon1={<AddFriend />}
      />
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <Divider state={dividerState.LONGTHICK} />
      <FriendsListContainer>
        <DesignerListContainer>
          <MajorHeader people={3} majorIn="Designer" />
          {designerListState.map((designerList, index) => (
            <PersonalInfo
              key={designerList.name + index}
              img={designerList.img}
              name={designerList.name}
              message={designerList.message}
              group={designerList.group}
              major={designerList.majorIn}
            />
          ))}
        </DesignerListContainer>
        <Divider state={dividerState.SHORT} />
        <DeveloperListContainer>
          <MajorHeader people={2} majorIn="Frontend" />
          {developerListState.map((developerList, index) => (
            <PersonalInfo
              key={developerList.name + index}
              img={developerList.img}
              name={developerList.name}
              message={developerList.message}
              group={developerList.group}
              major={developerList.majorIn}
            />
          ))}
        </DeveloperListContainer>
      </FriendsListContainer>
    </>
  );
}

const SearchBarWrapper = styled.div`
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
