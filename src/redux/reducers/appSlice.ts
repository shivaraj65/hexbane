/**
 * this slice will contain application level data.
 * -> user infos
 */

import { userInfo } from "@/utils/types/appTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface app {
  userInfo: userInfo | null;
  theme: string;
}

const initialState: app = {
  userInfo: null,
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<userInfo>) {
      state.userInfo = action.payload;
    },
    updateTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },

    // todoAdded(state, action: PayloadAction<{ id: number; text: string }>) {
    //   state.push({
    //     id: action.payload.id,
    //     text: action.payload.text,
    //     completed: false,
    //   });
    // },
    // todoToggled(state, action: PayloadAction<number>) {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
  },
});

export const { updateUserInfo, updateTheme } = appSlice.actions;
export default appSlice.reducer;
