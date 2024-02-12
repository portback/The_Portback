import { create } from "zustand";

const authStore = create<{
  user:any,
  isLoggedin:boolean,
  initializeWindow:() => void,
  setUser: (value :any) => void,
  setIsLoggedIn: (value : boolean) => void,
}>((set) => ({
  user: null,
  isLoggedin: false,
  initializeWindow: () => {
    const user = localStorage.getItem("portback_user");
    if (user) {
      set({ user: JSON.parse(user!), isLoggedin: true });
    }
  },
  setUser: (value: any) => {
    set({ user: value });
  },
  setIsLoggedIn: (value: boolean) => {
    set({ isLoggedin: value });
  },
}));

export default authStore;
