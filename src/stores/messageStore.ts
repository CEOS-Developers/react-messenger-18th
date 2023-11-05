import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { TMessage } from 'types';
import chatData from 'data/chatData.json';
import { create } from 'zustand';

interface TMessageStore {
  messages: TMessage[];
  setMessages: (messages: TMessage[]) => void;
  toggleIsRead: (idx: number) => void;
}

const storedMessages: string | null = localStorage.getItem('messages');
const storedVersion = localStorage.getItem('version');
// localStorage에 data가 있으면 그것을 사용하고, 아니면 dummy 사용
const initialMessageState: TMessage[] =
  storedMessages &&
  storedVersion &&
  storedVersion === process.env.REACT_APP_VERSION
    ? JSON.parse(storedMessages)
    : chatData.data;

export const useMessageStore = create(
  devtools(
    // immer을 통해 messages 내부의 객체 수정 시 불필요한 리렌더링 방지
    immer<TMessageStore>((set) => ({
      messages: initialMessageState,
      toggleIsRead: (idx: number) =>
        set((state) => {
          state.messages[idx].isRead = !state.messages[idx].isRead;
        }),
      setMessages: (newMessages: TMessage[]) => set({ messages: newMessages }),
    }))
  )
);
