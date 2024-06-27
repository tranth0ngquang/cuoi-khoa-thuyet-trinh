import { createSlice } from "@reduxjs/toolkit";

const viTriSlice = createSlice({
  name: "viTriSlice",
  initialState: {
    viTriList: [],
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    setViTriList: (state, action) => {
      state.viTriList = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addViTriToList: (state, action) => {
      state.viTriList.push(action.payload);
    },
    updateViTriInList: (state, action) => {
      const index = state.viTriList.findIndex(
        (viTri) => viTri.id === action.payload.id
      );
      if (index !== -1) {
        state.viTriList[index] = action.payload;
      }
    },
    removeViTriFromList: (state, action) => {
      state.viTriList = state.viTriList.filter(
        (viTri) => viTri.id !== action.payload
      );
    },
  },
});

export const {
  setViTriList,
  setTotalPages,
  setCurrentPage,
  addViTriToList,
  updateViTriInList,
  removeViTriFromList,
} = viTriSlice.actions;
export default viTriSlice.reducer;
