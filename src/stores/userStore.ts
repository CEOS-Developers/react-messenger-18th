import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TUser } from 'types';
import userData from 'data/userData.json';

interface TUserStore {
  user: TUser;
  setUser: (user: TUser) => void;
}
const storedUser: string | null = localStorage.getItem('user_1');
const initialUserState: TUser = storedUser
  ? JSON.parse(storedUser)
  : userData.user_1;

export const useUserStore = create(
  devtools<TUserStore>((set) => ({
    user: initialUserState,
    setUser: (newUser: TUser) => set({ user: newUser }),
  }))
);
