import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type UserState = {
  userName: string | null;
  userRole: string | null;
};

export type UserActions = {
  setUser: (user: UserState) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  userName: null,
  userRole: null,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(
    persist(
      (set) => ({
        ...initState,
        setUser: ({ userName, userRole }) =>
          set(() => ({ userName, userRole })),
      }),
      {
        name: "user-session",
      }
    )
  );
};
