import { createSlice } from "@reduxjs/toolkit";

const loginStatusSlice = createSlice({
  name: "loginStatusSlice",
  initialState: {
    isLogin: false,
    isAdmin: false,
  },
  reducers: {
    setStateLogin: (state) => {
      state.isLogin = true;
    },
    setStateLogout: (state) => {
      state.isLogin = false;
    },
    setIsAdmin: (state) => {
      state.isAdmin = true;
    },
    setIsnotAdmin: (state) => {
      state.isAdmin = false;
    },
  },
});

export const { setStateLogin, setStateLogout, setIsAdmin, setIsnotAdmin } =
  loginStatusSlice.actions;
export default loginStatusSlice.reducer;
