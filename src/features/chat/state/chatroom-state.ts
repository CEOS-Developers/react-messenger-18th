import { ReactNode } from "react";

export interface chatRoomState {
  id: number;
  img: string;
  name: string;
  people: number;
  message: string;
  icon?: ReactNode;
  onClick?: () => void;
}
