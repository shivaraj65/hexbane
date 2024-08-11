import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/appSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,    
  }
})