import { ChatMessages } from "../components/organism/chatroom/ChatArea";

// 메시지들을 시간순에 따라 정렬
export function sortMessagesByTime(messages: ChatMessages) {
  return messages.sort((a, b) => {
    const timeA = a.time;
    const timeB = b.time;
    if (timeA < timeB) return -1;
    if (timeA > timeB) return 1;
    return 0;
  });
}
