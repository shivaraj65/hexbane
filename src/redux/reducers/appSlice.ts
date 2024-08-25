/**
 * this slice will contain application level data.
 * -> user infos
 */

import { userInfo } from "@/utils/types/appTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface app {
  userInfo: userInfo | null;
}

const initialState: app = {
  userInfo: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<userInfo>) {
      state.userInfo = action.payload;
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

export const { updateUserInfo } = appSlice.actions;
export default appSlice.reducer;
