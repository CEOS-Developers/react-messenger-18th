//style
import styled from "styled-components";
//component
import ChatCard from "./ChatCard";
import { useRecoilValue } from "recoil";
import {
  chatRoomListState,
  nameSearchState,
  usersState,
} from "../../recoil/state";
// 나중에 index 말고 value로 넘겨서 order에 맞게 최신순대로 출력, order 배열 따로 만들어서 그에 맞는
//chatcard 출력
const ChatCardList = () => {
  const chatList = useRecoilValue(chatRoomListState);
  const searchInput = useRecoilValue(nameSearchState);
  const users = useRecoilValue(usersState);
  const input = useRecoilValue(nameSearchState);
  //검색 이름에 해당하는 card 만 true return
  const nameSearch = (userId: number) => {
    if (users[userId].name.includes(input)) {
      return true;
    } else {
      return false;
    }
  };
  if (searchInput === "") {
    return (
      <ChatCardListWrapper>
        {chatList.map((value, index) => {
          return <ChatCard index={index} />;
        })}
      </ChatCardListWrapper>
    );
  } else {
    return (
      <ChatCardListWrapper>
        {chatList.map((value, index) => {
          return nameSearch(value.userList[1]) ? (
            <ChatCard index={index} />
          ) : null;
        })}
      </ChatCardListWrapper>
    );
  }
};
export default ChatCardList;

const ChatCardListWrapper = styled.div`
  height: 34.375rem;
  background-color: var(--black);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari*/
  }
`;
