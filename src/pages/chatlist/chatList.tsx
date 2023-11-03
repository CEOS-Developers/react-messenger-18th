import styled from "styled-components";
import { useState, useEffect } from "react";
import bottomBar from "../../assets/images/LightBottomBar.svg";
import StatusBar from "../../components/StatusBar/statusbar";
import TopBar from "../../components/TopBar/topbar";
import SearchBar from "../../components/SearchBar/serachbar";
import friendsIcon from "../../assets/images/Friends.svg";
import { useNavigate } from "react-router-dom";
import userData from "../../assets/datas/userdata.json";
import chatData from "../../assets/datas/chatdata.json";
import ChatListItem from "../../components/ChatlistItem/chatlistitem";
interface Message {
  id: number;
  sender: string;
  content: string;
  showIcon: boolean;
  timestamp: string; //메시지 보내는 시간 정보 추가
  unread?: boolean; // 읽지 않은 메시지인지 여부를 나타내는 속성 추가
}
interface User {
  id: number;
  name: string;
}
interface ChatData {
  [key: string]: Message[];
}

export default function ChatList() {
  const navigate = useNavigate();

  const [lastMessages, setLastMessages] = useState<
    Record<string, Message | null>
  >({});

  const [sortedUsers, setSortedUsers] = useState(userData.users);

  useEffect(() => {
    // localStorage에서 chatData 가져오기
    const savedChats = JSON.parse(
      localStorage.getItem("chatMessages") || JSON.stringify(chatData)
    ) as ChatData;

    // 모든 사용자의 마지막 메시지와 시간 가져오기
    const lastMessage: Record<string, Message | null> = {};

    const usersWithLastMessage = userData.users
      .filter((user) => savedChats[user.id.toString()]?.length > 0) // chatData가 있는 사용자만 가져옴
      .map((user) => {
        const userChat = savedChats[user.id.toString()];
        const lastChat = userChat ? userChat[userChat.length - 1] : null;
        lastMessage[user.id] = lastChat;
        return {
          ...user,
          lastMessageTimestamp: lastChat
            ? new Date(lastChat.timestamp)
            : new Date(0),
        };
      });

    const newLastMessagesWithUnread: Record<string, Message | null> = {};
    // 모든 사용자의 마지막 메시지에 대한 unread 상태 업데이트 :
    // 마지막 sender가 내가 아닌 경우 unread 로 처리
    userData.users.forEach((user) => {
      const lastMsg = lastMessage[user.id];
      if (lastMsg) {
        const updatedMessage = {
          ...lastMsg,
          unread: lastMsg.sender !== "신동현",
        };
        newLastMessagesWithUnread[user.id] = updatedMessage;
      }
    });

    setLastMessages(newLastMessagesWithUnread);

    // 타임스탬프 기준으로 사용자 정렬: 가장 최근 메시지가 위에 오게 함
    const sortedUsers = usersWithLastMessage.sort(
      (a, b) =>
        b.lastMessageTimestamp.getTime() - a.lastMessageTimestamp.getTime()
    );
    setSortedUsers(sortedUsers);
  }, []);

  //searchBar에서 검색하면, 필터링된 사용자만 뜨게 하는 부분
  const [searchTerm, setSearchTerm] = useState<string>("");
  function getFilteredUsers(users: User[], searchTerm: string) {
    if (!searchTerm) return users;
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const filteredUsers = getFilteredUsers(sortedUsers, searchTerm);

  return (
    <div className="pageWrapper">
      <ChatRoomContainer>
        <StatusBar />
        <TopBar />
        <Title>
          Chat
          <img src={friendsIcon} onClick={() => navigate("/friends")} />
        </Title>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ChatlistContainer>
          {filteredUsers.map((user) => (
            <ChatListItem
              key={user.id}
              user={user}
              lastMessage={lastMessages[user.id.toString()]}
              onClick={() => navigate(`/chat/${user.id}`)}
            />
          ))}
        </ChatlistContainer>
        <BottomBarIcon src={bottomBar} alt="bottom bar Icon" />
      </ChatRoomContainer>
    </div>
  );
}

const ChatRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 1.5rem;
  height: 100vh;
  width: 100vw;
  border: solid rgba(144, 144, 147, 0.5);
`;

const Title = styled.span`
  font-family: "SF Pro Text";
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  width: 100%;
  padding-left: 1.37rem;
  margin-bottom: 1.75rem;
  display: flex;
  justify-content: space-between;
  padding-right: 1.12rem;
`;
const BottomBarIcon = styled.img`
  width: 100%;
  height: 2.125rem;
  margin-bottom: 0;
  /* position: relative; */
  position: absolute;
  bottom: 0;
`;

const ChatlistContainer = styled.div`
  overflow-y: auto; // 세로 스크롤
  width: 100%;
  height: 100%;
`;
