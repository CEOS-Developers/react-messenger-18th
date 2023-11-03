import { atom } from "recoil";
import { ChatMessages } from "../components/organism/chatroom/ChatArea";

// 첫번째 채팅방의 상태
export const firstRoomState = atom({ key: "firstRoomState", default: true });

export const userAMessageState = atom<ChatMessages>({
  key: "userAMessageState",
  default: [],
  // localStorage와 atom을 연동
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("userAMessage");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("userAMessage")
          : localStorage.setItem("userAMessage", JSON.stringify(newValue));
      });
    },
  ],
});

export const userBMesasgeState = atom<ChatMessages>({
  key: "userBMessageState",
  default: [],
  // localStorage와 atom을 연동
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("userBMessage");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("userBMessage")
          : localStorage.setItem("userBMessage", JSON.stringify(newValue));
      });
    },
  ],
});

// 두번째 채팅방의 상태

export const secondRoomState = atom({ key: "secondRoomState", default: true });

export const userCMessageState = atom<ChatMessages>({
  key: "userCMessageState",
  default: [],
  // localStorage와 atom을 연동
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("userCMessage");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("userCMessage")
          : localStorage.setItem("userCMessage", JSON.stringify(newValue));
      });
    },
  ],
});

export const userDMesasgeState = atom<ChatMessages>({
  key: "userDMessageState",
  default: [],
  // localStorage와 atom을 연동
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("userDMessage");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("userDMessage")
          : localStorage.setItem("userDMessage", JSON.stringify(newValue));
      });
    },
  ],
});

// 사용자 검색창의 상태

export const isSearchState = atom({
  key: "isSearchState",
  default: false,
});

export const userInputState = atom({
  key: "userInputState",
  default: "",
});

export const lastMessage1State = atom({
  key: "lastMessage1State",
  default: "",
});

export const lastMessage2State = atom({
  key: "lastMessage2State",
  default: "",
});

export const unReadCount1State = atom({
  key: "unreadCount1State",
  default: 0,
});
export const unReadCount2State = atom({
  key: "unreadCount2State",
  default: 0,
});
