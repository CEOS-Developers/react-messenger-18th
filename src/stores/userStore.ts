import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TUser } from 'types';
import userData from 'data/userData.json';

interface TUserStore {
  user: TUser;
  setUser: (user: TUser) => void;
}

const user: string | null = localStorage.getItem('user');
const storedVersion = localStorage.getItem('version');
const initialUserState: TUser =
  user && storedVersion && storedVersion === process.env.REACT_APP_VERSION
    ? JSON.parse(user)
    : userData.data[0]; // default로 설정되는 유저는 user_1

export const useUserStore = create(
  devtools<TUserStore>((set) => ({
    user: initialUserState,
    setUser: (newUser: TUser) => set({ user: newUser }),
  }))
);
