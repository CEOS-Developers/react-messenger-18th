import { useState } from "react";
import { chatListState } from "../state/chatListState";

export default function useChatListStateChange() {
  const [subHeaderState, setSubHeaderState] = useState(chatListState.GROUP);

  const handleClick = (state: string) => {
    setSubHeaderState(state);
  };

  return {
    changeState: handleClick,
    subHeaderState,
  };
}
