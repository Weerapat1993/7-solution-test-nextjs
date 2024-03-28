import axios from "axios";
import { createAppSlice } from "../createAppSlice";

type UserState = {
  isFetch: boolean;
  isLoading: boolean;
  list: any[];
  error: any;
};

const initialState = {
  isFetch: false,
  isLoading: false,
  list: [],
  error: null,
} as UserState;

export const user = createAppSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    initializeUser: create.reducer<UserState>((state) => {
      state = initialState
    }),
    getUserList: create.asyncThunk(
      async () => {
        try {
          const res = await axios({
            url: 'https://dummyjson.com/users',
            method: 'GET',
          })
          return res?.data?.users || []
        } catch (e) {
          console.error(e)
          return e
        }
      },
      {
        pending: (state) => {
          state.isFetch = false
          state.isLoading = true
          state.error = null
        },
        fulfilled: (state, action) => {
          state.isFetch = true
          state.isLoading = false
          state.list = action.payload
          state.error = null
        },
        rejected: (state, action) => {
          state.isFetch = false
          state.isLoading = false
          state.error = action.payload
        },
        settled: (state) => {
          state.isLoading = false
        }
      }
    )
  }),
});

export const {
  initializeUser,
  getUserList,
} = user.actions;
export default user.reducer;
