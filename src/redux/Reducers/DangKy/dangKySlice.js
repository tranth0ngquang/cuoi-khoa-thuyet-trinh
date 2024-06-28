import { createSlice } from "@reduxjs/toolkit";

const dangKySlice = createSlice({
  name: "dangKySlice",
  initialState: {
    dangKyThanhCong: null,
    dangNhapThanhCong: null,
    userID: null,
    userInfo: null,
  },
  reducers: {
    setDangKyThanhCong: (state, action) => {
      state.dangKyThanhCong = action.payload;
    },
    setDangNhapThanhCong: (state, action) => {
      state.dangNhapThanhCong = action.payload;
    },
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  setDangKyThanhCong,
  setDangNhapThanhCong,
  setUserID,
  setUserInfo,
} = dangKySlice.actions;
export default dangKySlice.reducer;
