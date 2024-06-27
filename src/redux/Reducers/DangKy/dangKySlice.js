import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

const dangKySlice = createSlice({
  name: "dangKySlice",
  initialState: {
    dangKyThanhCong: null,
    dangNhapThanhCong: null,
  },
  reducers: {
    setDangKyThanhCong: (state, action) => {
      state.dangKyThanhCong = action.payload;
    },
    setDangNhapThanhCong: (state, action) => {
      state.dangNhapThanhCong = action.payload;
    },
  },
});

export const { setDangKyThanhCong, setDangNhapThanhCong } = dangKySlice.actions;
export default dangKySlice.reducer;
