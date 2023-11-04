import { useState } from "react";

export function useChatInputChanged() {
  const [chatText, setChatText] = useState("");
  const [sendBtnState, setSendBtnState] = useState(false);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === "") {
      setSendBtnState(false);
    }
    if (event.target.value.trim() !== "") {
      setSendBtnState(true);
    }
    setChatText(event.target.value);
  };

  return { chatText, setChatText, setSendBtnState, sendBtnState, inputChanged };
}
