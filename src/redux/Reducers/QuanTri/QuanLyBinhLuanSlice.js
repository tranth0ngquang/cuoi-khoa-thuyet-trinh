// import { createSlice } from "@reduxjs/toolkit";

// const quanLyBinhLuanSlice = createSlice({
//   name: "quanLyBinhLuanSlice",
//   initialState: {
//     binhLuanList: [],
//     totalPages: 1,
//     currentPage: 1,
//   },
//   reducers: {
//     setBinhLuanList: (state, action) => {
//       state.binhLuanList = action.payload;
//       state.totalPages = Math.ceil(action.payload.length / 10);
//     },
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//     removeBinhLuanFromList: (state, action) => {
//       state.binhLuanList = state.binhLuanList.filter(
//         (binhLuan) => binhLuan.id !== action.payload
//       );
//     },
//   },
// });

// export const { setBinhLuanList, setCurrentPage, removeBinhLuanFromList } =
//   quanLyBinhLuanSlice.actions;
// export default quanLyBinhLuanSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const quanLyBinhLuanSlice = createSlice({
  name: "quanLyBinhLuanSlice",
  initialState: {
    binhLuanList: [],
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    setBinhLuanList: (state, action) => {
      state.binhLuanList = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 10);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    removeBinhLuanFromList: (state, action) => {
      state.binhLuanList = state.binhLuanList.filter(
        (binhLuan) => binhLuan.id !== action.payload
      );
    },
  },
});

export const { setBinhLuanList, setCurrentPage, removeBinhLuanFromList } =
  quanLyBinhLuanSlice.actions;
export default quanLyBinhLuanSlice.reducer;
