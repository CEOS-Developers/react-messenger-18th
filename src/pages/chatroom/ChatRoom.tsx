import BottomInputBox from "./BottomInputBox";
import TopInChat from "./TopInChat";
import { useState } from "react";
import InchatList from "./InchatList";
import user from "user.json";
import { styled } from "styled-components";

const ChatRoom: React.FC = () => {
  const [chat, setChat] = useState<
    Array<{ value: string; id: number; sender: string; date: string }>
  >([]);
  const [currentUser, setCurrentUser] = useState(user.users[0]);

  const onCreate = (data: string) => {
    const randomId = Math.floor(Math.random() * 1000); // 0에서 999 사이의 랜덤 정수
    const created_date = new Date();
    const hours = created_date.getHours();
    const minutes = created_date.getMinutes();

    // 시간을 오전(AM) 또는 오후(PM)로 변환
    const period = hours >= 12 ? "오후" : "오전";
    const formattedHours = String(hours % 12 || 12).padStart(2, "0"); // 0시를 12시로 표시하고 두 자리로 변환
    const formattedMinutes = String(minutes).padStart(2, "0"); // 두 자리로 변환

    const time = `${period} ${formattedHours}:${formattedMinutes}`;

    const newItem = {
      value: data,
      id: randomId,
      sender: currentUser.name,
      date: time,
    };
    setChat([...chat, newItem]);
    console.log(newItem);
  };

  const changeUser = (targetId: number) => {
    if (targetId === 0) {
      setCurrentUser(user.users[1]);
    } else {
      setCurrentUser(user.users[0]);
    }
  };

  return (
    <Container>
      <TopInChat currentUser={currentUser} changeUser={changeUser} />
      <InchatList currentUser={currentUser} chat={chat} />
      <BottomInputBox onCreate={onCreate} />
    </Container>
  );
};

export default ChatRoom;
const Container = styled.div``;
