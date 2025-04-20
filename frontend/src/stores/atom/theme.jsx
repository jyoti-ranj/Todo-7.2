import {atom} from "recoil"

export const themeAtom = atom({
    key: 'theme',
    default: 'light',
})

export const filterAtom = atom({
    key: "filterAtom",
    default: "",
  });