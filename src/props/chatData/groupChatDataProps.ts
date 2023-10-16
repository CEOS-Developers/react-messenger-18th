import { ReactNode } from "react";

export interface GroupChatDataProps {
  id: number;
  img: string;
  name: string;
  people: number;
  message: string;
  icon?: ReactNode;
  onClick?: () => void;
}
