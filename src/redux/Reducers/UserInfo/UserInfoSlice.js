// import { createSlice } from "@reduxjs/toolkit";

// const userInfoSlice = createSlice({
//   name: "userInfoSlice",
//   initialState: {
//     mangPhongDaDat: [],
//     userInfo: {},
//     chiTietPhong: {},
//   },
//   reducers: {
//     setMangPhongDaDat: (state, action) => {
//       state.mangPhongDaDat = action.payload;
//     },
//     setUserInfor: (state, action) => {
//       state.userInfo = action.payload;
//     },
//     setChiTietPhong: (state, action) => {
//       state.chiTietPhong = action.payload;
//     },
//   },
// });

// export const { setMangPhongDaDat, setUserInfor, setChiTietPhong } =
//   userInfoSlice.actions;
// export default userInfoSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: {
    mangPhongDaDat: [],
    userInfo: {},
    chiTietPhong: {},
  },
  reducers: {
    setMangPhongDaDat: (state, action) => {
      state.mangPhongDaDat = action.payload;
    },
    setUserInfor: (state, action) => {
      state.userInfo = action.payload;
    },
    setChiTietPhong: (state, action) => {
      const { id, data } = action.payload;
      state.chiTietPhong[id] = data;
    },
  },
});

export const { setMangPhongDaDat, setUserInfor, setChiTietPhong } =
  userInfoSlice.actions;
export default userInfoSlice.reducer;
