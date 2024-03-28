import { TodoList } from "@/modules/todo/@types/todo";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
  vegetables: [],
  keys: [],
} as TodoList;

export const auth = createSlice({
  name: "todo",
  initialState,
  reducers: {
    init: () => initialState,
    setFruit: (state, action) => {
      state.fruits = action.payload
    },
    setVegetable: (state, action) => {
      state.vegetables = action.payload
    },
    setKey: (state, action) => {
      state.keys = action.payload
    },
  },
});

export const {
  init,
  setFruit,
  setVegetable,
  setKey,
} = auth.actions;
export default auth.reducer;

