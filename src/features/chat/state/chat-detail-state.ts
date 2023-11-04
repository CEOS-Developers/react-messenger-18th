export interface ChatDetailState {
  img?: string;
  name?: string;
  chatText: string;
  file?: string;
  doubleClicked: boolean;
  time: string | null;
  isUser: boolean;
  index?: number;
  chatData?: ChatDetailState[] | [];
  setChatData?: React.Dispatch<React.SetStateAction<ChatDetailState[] | []>>;
  setShouldScrollToBottom?: React.Dispatch<React.SetStateAction<boolean>>;
}
