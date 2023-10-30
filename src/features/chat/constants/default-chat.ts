import { ChatRoomData } from "../../../common/utils/accessStorage/getChatRoomData";

interface StateProps {
  img?: string;
  name?: string;
}

export const defaultChatRoomData = (state: StateProps) => {
  const initialChatData: ChatRoomData[] = [
    {
      img: state.img,
      name: state.name,
      chatText: "이 내용 확인해주세요!",
      file: "디자인파일_최종.png",
      doubleClicked: true,
      time: "오후 3:32",
      isUser: false,
    },
    {
      chatText: "네 확인했습니다!",
      doubleClicked: false,
      time: "오후 3:32",
      isUser: true,
    },
    {
      img: state.img,
      name: state.name,
      chatText: "넵 감사합니다~",
      doubleClicked: true,
      time: "오후 3:33",
      isUser: false,
    },
  ];

  return initialChatData;
};
