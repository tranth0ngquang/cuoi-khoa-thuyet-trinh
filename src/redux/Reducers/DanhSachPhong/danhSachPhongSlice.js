import { createSlice } from "@reduxjs/toolkit";

const danhSachPhongSlice = createSlice({
  name: "danhSachPhongSlice",
  initialState: {
    danhSachPhong: [],
    danhSachPhongFull: [],
    idSelectedRoom: "",
  },
  reducers: {
    setDanhSachPhong: (state, action) => {
      state.danhSachPhong = action.payload;
    },
    setDanhSachPhongFull: (state, action) => {
      state.danhSachPhongFull = action.payload;
    },
    setIdSelectedRoom: (state, action) => {
      state.idSelectedRoom = action.payload;
    },
  },
});

export const { setDanhSachPhong, setDanhSachPhongFull, setIdSelectedRoom } =
  danhSachPhongSlice.actions;
export default danhSachPhongSlice.reducer;
