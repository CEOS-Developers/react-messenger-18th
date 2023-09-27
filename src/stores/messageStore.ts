import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TMessage } from 'types';
import chatData from 'data/chatData.json';

interface TMessageStore {
  messages: TMessage[];
  setMessages: (messages: TMessage[]) => void;
}

const storedMessages: string | null = localStorage.getItem('messages');
const initialMessageState: TMessage[] = storedMessages
  ? JSON.parse(storedMessages)
  : chatData.data;

export const useMessageStore = create(
  devtools<TMessageStore>((set) => ({
    messages: initialMessageState,
    setMessages: (newMessages: TMessage[]) => set({ messages: newMessages }),
  }))
);
