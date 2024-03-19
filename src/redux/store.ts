import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import userReducer from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([]),
});

export const makeStore = () => {
  let initialStore = store
  return initialStore
}

setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const storeWrapper = createWrapper(makeStore);
