
import { createSlice } from "@reduxjs/toolkit";

const chiTietPhongSlice = createSlice({
  name: "chiTietPhongSlice",
  initialState: {
    chiTietPhong: null,
    soLuongKhachToiDa: 99,
    soLuongKhachHienTai: 1,
    mangBinhLuan: [],
  },
  reducers: {
    setChiTietPhong: (state, action) => {
      state.chiTietPhong = action.payload;
      state.soLuongKhachToiDa = action.payload.khach;
    },
    setSoLuongKhachHienTai: (state, action) => {
      state.soLuongKhachHienTai = action.payload;
    },
    setSoLuongKhachToiDa: (state, action) => {
      state.soLuongKhachToiDa = action.payload;
    },
    setMangBinhLuan: (state, action) => {
      state.mangBinhLuan = action.payload;
    },
    addBinhLuan: (state, action) => {
      state.mangBinhLuan.push(action.payload);
    },
  },
});

export const {
  setChiTietPhong,
  setSoLuongKhachHienTai,
  setSoLuongKhachToiDa,
  setMangBinhLuan,
  addBinhLuan,
} = chiTietPhongSlice.actions;
export default chiTietPhongSlice.reducer;
