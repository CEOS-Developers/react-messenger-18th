import { atom } from "recoil";

// 첫번째 채팅방의 상태
export const firstRoomState = atom({ key: "firstRoomState", default: true });

export const userAMessageState = atom({
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

export const userBMesasgeState = atom({
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

export const userCMessageState = atom({
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

export const userDMesasgeState = atom({
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
