import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TUser } from 'types';
import userData from 'data/userData.json';

interface TUserStore {
  user: TUser;
  setUser: (user: TUser) => void;
}

const initialUserState: TUser = userData.data[0];

export const useUserStore = create(
  devtools<TUserStore>((set) => ({
    user: initialUserState,
    setUser: (newUser: TUser) => set({ user: newUser }),
  }))
);
