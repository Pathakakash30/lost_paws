import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;

let initialState;

if (!userInfo) {
  initialState = {
    loginStatus: false,

    name: null,
    token: null,
  };
} else {
  initialState = {
    loginStatus: userInfo.loginStatus,

    name: userInfo.name,
    token: userInfo.token,
  };
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log(payload);
      state.loginStatus = true;
      state.name = payload.name;
      state.token = payload.token;
      const userInfo = {
        loginStatus: state.loginStatus,
        name: state.name,
        token: state.token,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    logout: (state, payload) => {
      state.loginStatus = false;
      state.email = null;
      state.name = "";
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
