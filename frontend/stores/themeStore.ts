import { create } from "zustand";

type ThemeStoreT = {
  darkMode: boolean;
  setDarkMode: (v: any) => void;
};

const themeStore = create<ThemeStoreT>((set) => ({
  darkMode: false,
  setDarkMode: (value) => {
    set({ darkMode: value });
  },
}));

export default themeStore;
