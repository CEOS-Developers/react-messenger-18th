import { atom } from "recoil";

export const isUser1State = atom({ key: "isUser1State", default: true });

export const user1MessageState = atom({
  key: "user1MessageState",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("user1Message");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("user1Message")
          : localStorage.setItem("user1Message", JSON.stringify(newValue));
      });
    },
  ],
});

export const user2MesasgeState = atom({
  key: "user2MessageState",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("user2Message");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("user2Message")
          : localStorage.setItem("user2Message", JSON.stringify(newValue));
      });
    },
  ],
});
