import HomeBar from "HomeBar";
import StatusBar from "StatusBar";
import BottomInputBox from "./BottomInputBox";
import TopInChat from "./TopInChat";
import { useEffect, useState } from "react";
import InchatList from "./InchatList";

const ChatRoom: React.FC = () => {
  const [chat, setChat] = useState<
    Array<{ value: string; id: number; sender: boolean }>
  >([]);

  const onCreate = (data: string) => {
    const created_date = new Date().getTime();
    const newItem = {
      value: data,
      id: created_date,
      sender: false,
    };

    const newChat = [...chat, newItem];
    //localStorage.setItem("message", JSON.stringify(newItem));
    setChat([...chat, newItem]);
  };
  return (
    <div className="ChatRoom">
      <StatusBar />
      <TopInChat />
      <InchatList chat={chat} />
      <BottomInputBox onCreate={onCreate} />
      <HomeBar />
    </div>
  );
};

export default ChatRoom;
