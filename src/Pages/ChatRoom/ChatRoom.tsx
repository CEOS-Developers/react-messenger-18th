import HomeBar from "HomeBar";
import StatusBar from "StatusBar";
import BottomInputBox from "./BottomInputBox";
import TopInChat from "./TopInChat";

const ChatRoom = () => {
  return (
    <div className="ChatRoom">
      <StatusBar />
      <TopInChat />
      <BottomInputBox />
      <HomeBar />
    </div>
  );
};

export default ChatRoom;
