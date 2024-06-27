import { createSlice } from "@reduxjs/toolkit";

const quanLyDatPhongSlice = createSlice({
  name: "quanLyDatPhongSlice",
  initialState: {
    datPhongList: [],
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    setDatPhongList: (state, action) => {
      state.datPhongList = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 10);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    updateDatPhongInList: (state, action) => {
      const index = state.datPhongList.findIndex((datPhong) => datPhong.id === action.payload.id);
      if (index !== -1) {
        state.datPhongList[index] = action.payload;
      }
    },
    removeDatPhongFromList: (state, action) => {
      state.datPhongList = state.datPhongList.filter((datPhong) => datPhong.id !== action.payload);
    },
  },
});

export const { setDatPhongList, setCurrentPage, updateDatPhongInList, removeDatPhongFromList } = quanLyDatPhongSlice.actions;
export default quanLyDatPhongSlice.reducer;
