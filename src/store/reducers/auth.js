import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    // username: null,
  },
  reducers: {
    logIn: (state, action) => {
      localStorage.setItem("token", "my_seckret_token");
      localStorage.setItem("username", action.payload.username);
      state.isLoggedIn = true;
      state.username = action.payload.username;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});
export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
