import { User } from "@/src/@types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  user: Partial<User>;
  token: string;
}

const initialState: State = {
  user: {},
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    clear: () => initialState,
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
