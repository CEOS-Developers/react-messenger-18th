export interface ChatDetailState {
  img?: string;
  name?: string;
  chatText: string;
  file?: string;
  doubleClicked: boolean;
  time: string | null;
  isUser: boolean;
}
