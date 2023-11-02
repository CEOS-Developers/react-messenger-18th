import { useState } from "react";
import { ChatDetailState } from "../state";

export function useChatHeaderClicked(
  setChatData: React.Dispatch<React.SetStateAction<ChatDetailState[]>>
) {
  const [headerClicked, setHeaderClicked] = useState(false);

  const toggleHeaderClicked = () => {
    setHeaderClicked((prev) => !prev);

    setChatData((prevChatData) => {
      const updatedChatData = prevChatData.map((chatItem) => {
        return {
          ...chatItem,
          isUser: !chatItem.isUser,
        };
      });
      return updatedChatData;
    });
  };

  return { headerClicked, toggleHeaderClicked };
}
