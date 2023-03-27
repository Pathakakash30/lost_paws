import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;

let initialState;

if (!userInfo) {
  initialState = {
    loginStatus: false,
    email: null,
    name: "",
  };
} else {
  initialState = {
    loginStatus: userInfo.loginStatus,
    email: null,
    name: userInfo.name,
  };
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.loginStatus = true;
      state.name = payload.name;
      const userInfo = { loginStatus: state.loginStatus, name: state.name };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    logout: (state, payload) => {
      state.loginStatus = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
