
import { createSlice } from "@reduxjs/toolkit";

const quanTriSlice = createSlice({
  name: "quanTriSlice",
  initialState: {
    userList: [],
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addUserToList: (state, action) => {
      state.userList.push(action.payload);
    },
    updateUserInList: (state, action) => {
      const index = state.userList.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.userList[index] = action.payload;
      }
    },
    removeUserFromList: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const {
  setUserList,
  setTotalPages,
  setCurrentPage,
  addUserToList,
  updateUserInList,
  removeUserFromList,
} = quanTriSlice.actions;
export default quanTriSlice.reducer;
