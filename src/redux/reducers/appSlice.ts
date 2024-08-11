// this slice will contain application leve data such as
//

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Todo type
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the initial state as an array of Todo
const initialState: Todo[] = [
  {
    id: 0,
    text: "hello",
    completed: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<{ id: number; text: string }>) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action: PayloadAction<number>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
