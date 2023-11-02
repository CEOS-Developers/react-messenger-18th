import { printChatTime } from "@common/utils";
import { ChatDetailState } from "../state";

interface SendBtnClickedProps {
  chatText: string;
  sendBtnState: boolean;
  setChatText: React.Dispatch<React.SetStateAction<string>>;
  setShouldScrollToBottom: React.Dispatch<React.SetStateAction<boolean>>;
  setChatData: React.Dispatch<React.SetStateAction<ChatDetailState[]>>;
}

export function useSendBtnClicked({
  chatText,
  sendBtnState,
  setChatText,
  setShouldScrollToBottom,
  setChatData,
}: SendBtnClickedProps) {
  const btnClicked = () => {
    if (!sendBtnState) {
      return;
    }
    setChatText("");
    setShouldScrollToBottom(true);
    setChatData((prev) => {
      if (prev[prev.length - 1].time === printChatTime()) {
        prev[prev.length - 1].time = null;
      }
      return [
        ...prev,
        {
          chatText: chatText.trim(),
          doubleClicked: false,
          time: printChatTime(),
          isUser: true,
        },
      ];
    });
  };

  return { btnClicked };
}
