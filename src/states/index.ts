import { atom } from "recoil";

/**
 * @state 1 : 본인, 2 : 상대방
 * @change when user clicks top bar in the chatroom
 */
export const talkState = atom({
  key: "talkState",
  default: 1,
});

export const chatToggleState = atom({
  key: "chatToggleState",
  default: false,
});
