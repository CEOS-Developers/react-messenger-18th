import { v4 as uuidv4 } from "uuid";
import { getTime } from "./getTime";
export function handleKeyDown(
  event: any,
  inputMessage: string,
  isUser1: boolean,
  setUser1Message: any,
  user1Message: any,
  setUser2Message: any,
  user2Message: any,
  setInputMessage: any
) {
  // 한글 입력시 두 번 입력 방지
  if (event.nativeEvent.isComposing) {
    return;
  }
  if (event.key === "Enter") {
    if (inputMessage.trim().length > 0) {
      const newMessage = {
        time: getTime("YYYY-MM-DD HH:mm:ss"),
        id: uuidv4(), // uuid4 generator를 통한 메시지 고유 id 생성
        text: inputMessage,
        isRead: false, // 상대가 읽었는지 여부 -> ChatNav에서 사용자 toggle했을시 읽음처리
      };
      if (isUser1) {
        setUser1Message([...user1Message, newMessage]);
        localStorage.setItem("user1Message", JSON.stringify(user1Message));
      } else {
        setUser2Message([...user2Message, newMessage]);
        localStorage.setItem("user2Message", JSON.stringify(user2Message));
      }
      setInputMessage("");
    }
  }
}
