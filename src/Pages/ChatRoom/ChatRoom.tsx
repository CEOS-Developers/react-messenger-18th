import HomeBar from "HomeBar";
import StatusBar from "StatusBar";
import BottomInputBox from "./BottomInputBox";
import TopInChat from "./TopInChat";
import { useEffect, useState } from "react";
import InchatList from "./InchatList";
import message from "message.json";
import user from "user.json";

const ChatRoom: React.FC = () => {
  const [chat, setChat] = useState<
    Array<{ value: string; id: number; sender: boolean }>
  >([]);
  const [currentUserId, setCurrentUserId] = useState<number>(11);

  const onCreate = (data: string) => {
    const created_date = new Date().getTime();
    const newItem = {
      value: data,
      id: created_date,
      sender: false,
    };
    setChat([...chat, newItem]);
  };

  // message와 user 데이터를 콘솔에 출력
  useEffect(() => {
    console.log("Message Data:", message);
    console.log("User Data:", user);
  }, []);

  return (
    <div className="ChatRoom">
      <StatusBar />
      <TopInChat user={user} />
      <InchatList chat={chat} />
      <BottomInputBox onCreate={onCreate} />
      <HomeBar />
    </div>
  );
};

export default ChatRoom;
