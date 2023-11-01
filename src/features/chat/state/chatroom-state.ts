import { ReactNode } from "react";

export interface groupChatRoomState {
  id: number;
  img: string;
  name: string;
  people: number;
  message: string;
  type: string;
  icon?: ReactNode;
  onClick?: () => void;
}
