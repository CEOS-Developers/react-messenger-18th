import BottomInputBox from "./BottomInputBox";
import TopInChat from "./TopInChat";
import { useEffect, useRef, useState } from "react";
import InchatList from "./InchatList";
import chatdata from "chatdata.json";
import userdata from "dummyFriendNames.json";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { idText } from "typescript";

const ChatRoom: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const chatRoomLocalStorageKey = `chatData_${chatId}`;
  const savedChat = localStorage.getItem(chatRoomLocalStorageKey);
  const [chat, setChat] = useState<
    Array<{
      roomId: number;
      value: string;
      id: number;
      sender: string;
      date: string;
      calendar: string;
    }>
  >(savedChat ? JSON.parse(savedChat) : []);
  const OtherUser = chatId
    ? userdata.users.find((user) => user.id === parseInt(chatId, 10))
    : null;
  const [currentUser, setCurrentUser] = useState(
    OtherUser || userdata.users[0]
  );

  const onCreate = (data: string) => {
    const created_date = new Date();
    const hours = created_date.getHours();
    const minutes = created_date.getMinutes();
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = daysOfWeek[created_date.getDay()];

    // 시간을 오전(AM) 또는 오후(PM)로 변환
    const period = hours >= 12 ? "오후" : "오전";
    const formattedHours = String(hours % 12 || 12).padStart(2, "0"); // 0시를 12시로 표시하고 두 자리로 변환
    const formattedMinutes = String(minutes).padStart(2, "0"); // 두 자리로 변환
    const formattedDate = `${created_date.getFullYear()}. ${(
      created_date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}. ${created_date
      .getDate()
      .toString()
      .padStart(2, "0")}. ${dayOfWeek}`;
    const time = ` ${period} ${formattedHours}:${formattedMinutes}`;
    const newItem = {
      roomId: currentUser.id,
      value: data,
      id: currentUser.id,
      sender: currentUser.name,
      date: time,
      calendar: formattedDate,
    };
    const newData = [...chat, newItem];
    localStorage.setItem(chatRoomLocalStorageKey, JSON.stringify(newData));
    setChat([...chat, newItem]);
  };

  const changeUser = (userId: number) => {
    const selectedUser = userdata.users.find((user) => user.id === userId);
    if (selectedUser) {
      if (selectedUser.id === 0) {
        setCurrentUser(OtherUser || userdata.users[0]);
      } else {
        const userWithIdZero = userdata.users.find((user) => user.id === 0);
        if (userWithIdZero) {
          setCurrentUser(userWithIdZero);
        }
      }
    }
  };

  const mounted = useRef(false);
  useEffect(() => {
    const currentChatData = chatdata.chatdata.filter(
      (item) => item.roomId === currentUser.id
    );
    const localStorageData = JSON.parse(
      localStorage.getItem(chatRoomLocalStorageKey) || "[]"
    );
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (
        localStorageData.length == 0 ||
        currentChatData.length == localStorageData.length
      ) {
        setChat((prevChat) => [...prevChat, ...currentChatData]);
      }
    }
  }, [chatdata.chatdata]);

  return (
    <div>
      <TopWrapper>
        <TopInChat currentUser={currentUser} changeUser={changeUser} />
      </TopWrapper>
      <InchatList currentUser={currentUser} chat={chat} />
      <BottomWrapper>
        <BottomInputBox onCreate={onCreate} />
      </BottomWrapper>
    </div>
  );
};

export default ChatRoom;

const TopWrapper = styled.div`
  top: 38px;
`;

const BottomWrapper = styled.div`
  bottom: 34px;
`;
