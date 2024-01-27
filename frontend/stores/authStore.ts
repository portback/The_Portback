import { create } from "zustand";

const authStore = create((set) => ({
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
