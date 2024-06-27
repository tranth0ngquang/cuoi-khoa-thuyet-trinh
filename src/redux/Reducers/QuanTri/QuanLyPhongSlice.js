import { createSlice } from "@reduxjs/toolkit";

const quanLyPhongSlice = createSlice({
  name: "quanLyPhongSlice",
  initialState: {
    phongList: [],
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    setPhongList: (state, action) => {
      state.phongList = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addPhongToList: (state, action) => {
      state.phongList.push(action.payload);
    },
    updatePhongInList: (state, action) => {
      const index = state.phongList.findIndex((phong) => phong.id === action.payload.id);
      if (index !== -1) {
        state.phongList[index] = action.payload;
      }
    },
    removePhongFromList: (state, action) => {
      state.phongList = state.phongList.filter((phong) => phong.id !== action.payload);
    },
  },
});

export const { setPhongList, setTotalPages, setCurrentPage, addPhongToList, updatePhongInList, removePhongFromList } = quanLyPhongSlice.actions;
export default quanLyPhongSlice.reducer;
