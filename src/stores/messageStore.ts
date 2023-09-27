import { createWithEqualityFn } from 'zustand/traditional';

import { devtools } from 'zustand/middleware';
import { TMessage } from 'types';
import chatData from 'data/chatData.json';
import { shallow } from 'zustand/shallow';

interface TMessageStore {
  messages: TMessage[];
  setMessages: (messages: TMessage[]) => void;
}

const storedMessages: string | null = localStorage.getItem('messages');
const initialMessageState: TMessage[] = storedMessages
  ? JSON.parse(storedMessages)
  : chatData.data;

// 메시지 읽음 처리 로직이 계속해서 리렌더링 시키는 오류를 해결하기 위해 얕은 비교로 state update 판단하도록 함
export const useMessageStore = createWithEqualityFn(
  devtools<TMessageStore>((set) => ({
    messages: initialMessageState,
    setMessages: (newMessages: TMessage[]) => set({ messages: newMessages }),
  })),
  shallow
);
