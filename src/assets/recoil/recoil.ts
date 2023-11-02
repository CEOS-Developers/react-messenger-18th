import { atom } from "recoil";
import userData from "../data/userdata.json";
import chattingdata from "../data/chattingdata.json";

import { chattingInterface, userInterface } from "../types/interfaces";

export const meAtom = atom<userInterface>({
  key: "meAtom",
  default: userData.users[0],
});

export const friendsListAtom = atom<userInterface[]>({
  key: "friendsListAtom",
  default: userData.users.slice(1),
});

export const userArrayState = atom<userInterface[]>({
  key: "userArrayState",
  default: userData.users,
});

export const chatArrayState = atom<chattingInterface[]>({
  key: "dataArrayState",
  default: chattingdata.chattings,
});
