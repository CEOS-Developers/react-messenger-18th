import ChatSearch from "../components/chat/ChatSearch";
import ChatHeader from "../components/chat/ChatHeader";
import ChatCardList from "../components/chat/ChatCardList";
import HomeIndicator from "../components/HomeIndicator";
import Footer from "../components/Footer";
const ChatPage = () => {
  //const roomList = useRecoilState(chatRoomListState);

  return (
    <div className="pageWrapper">
      <ChatHeader />
      <ChatSearch />
      <ChatCardList />
      <Footer page="chat" />
      <HomeIndicator color="var(--gray-1)" />
    </div>
  );
};

export default ChatPage;
