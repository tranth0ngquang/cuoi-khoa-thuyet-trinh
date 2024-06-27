// src/store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "../Reducers/Home/homeSlice";
import danhSachPhongSlice from "../Reducers/DanhSachPhong/danhSachPhongSlice";
import chiTietPhongSlice from "../Reducers/ChiTietPhong/chiTietPhongSlice";
import userInfoSlice from "../Reducers/UserInfo/UserInfoSlice";
import quanTriSlice from "../Reducers/QuanTri/QuanTriSlice";
import viTriSlice from "../Reducers/QuanTri/ViTriSlice";
import quanLyPhongSlice from "../Reducers/QuanTri/QuanLyPhongSlice";
import quanLyDatPhongSlice from "../Reducers/QuanTri/QuanLyDatPhongSlice";
import loginStatusSlice from "../Reducers/LoginStatus/LoginStatusSlice";

const rootReducer = combineReducers({
  homeSlice,
  danhSachPhongSlice,
  chiTietPhongSlice,
  userInfoSlice,
  quanTriSlice,
  viTriSlice,
  quanLyPhongSlice,
  quanLyDatPhongSlice,
  loginStatusSlice,
});

export default rootReducer;
