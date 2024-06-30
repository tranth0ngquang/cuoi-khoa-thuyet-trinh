// // import { createSlice } from "@reduxjs/toolkit";

// // const homeSlice = createSlice({
// //   name: "homeSlice",
// //   initialState: {
// //     locationList: [],
// //     locationListCard: [],
// //     currentPage: 1,
// //     totalPages: 1,
// //     error: null,
// //     selectedLocation: null,
// //     startDate: new Date().toISOString(),
// //     endDate: new Date(new Date().setMonth(new Date().getMonth())).toISOString(),
// //     soLuongNgayO: 0,
// //   },
// //   reducers: {
// //     setLocationList: (state, action) => {
// //       state.locationList = action.payload;
// //     },
// //     setSelectedLocation: (state, action) => {
// //       state.selectedLocation = action.payload;
// //     },
// //     setLocationListCard: (state, action) => {
// //       state.locationListCard = action.payload.data;
// //       state.totalPages = Math.ceil(action.payload.totalRow / 8);
// //       console.log(state.totalPages);
// //     },
// //     setCurrentPage: (state, action) => {
// //       state.currentPage = action.payload;
// //     },
// //     setStartDate: (state, action) => {
// //       state.startDate = action.payload;
// //     },
// //     setEndDate: (state, action) => {
// //       state.endDate = action.payload;
// //     },
// //     setSoLuongNgayO: (state, action) => {
// //       state.soLuongNgayO = action.payload;
// //     },
// //   },
// // });

// // export const {
// //   setLocationList,
// //   setSelectedLocation,
// //   setLocationListCard,
// //   setCurrentPage,
// //   setSoLuongNgayO,
// //   setStartDate,
// //   setEndDate,
// // } = homeSlice.actions;
// // export default homeSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const homeSlice = createSlice({
//   name: "homeSlice",
//   initialState: {
//     locationList: [],
//     locationListCard: [],
//     currentPage: 1,
//     totalPages: 1,
//     error: null,
//     selectedLocation: null,
//     // startDate: new Date().toISOString(),
//     // endDate: new Date(
//     //   new Date().setMonth(new Date().getMonth() + 1)
//     // ).toISOString(),
//     startDate: null,
//     endDate: null,
//     soLuongNgayO: 0,
//   },
//   reducers: {
//     setLocationList: (state, action) => {
//       state.locationList = action.payload;
//     },
//     setSelectedLocation: (state, action) => {
//       state.selectedLocation = action.payload;
//     },
//     setLocationListCard: (state, action) => {
//       state.locationListCard = action.payload.data;
//       state.totalPages = Math.ceil(action.payload.totalRow / 8);
//     },
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//     setStartDate: (state, action) => {
//       state.startDate = action.payload;
//     },
//     setEndDate: (state, action) => {
//       state.endDate = action.payload;
//     },
//     setSoLuongNgayO: (state, action) => {
//       state.soLuongNgayO = action.payload;
//     },
//   },
// });

// export const {
//   setLocationList,
//   setSelectedLocation,
//   setLocationListCard,
//   setCurrentPage,
//   setSoLuongNgayO,
//   setStartDate,
//   setEndDate,
// } = homeSlice.actions;
// export default homeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    locationList: [],
    locationListCard: [],
    currentPage: 1,
    totalPages: 1,
    error: null,
    selectedLocation: null,
    startDate: null,
    endDate: null,
    soLuongNgayO: 0,
  },
  reducers: {
    setLocationList: (state, action) => {
      state.locationList = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    setLocationListCard: (state, action) => {
      state.locationListCard = action.payload.data;
      state.totalPages = Math.ceil(action.payload.totalRow / 10);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setSoLuongNgayO: (state, action) => {
      state.soLuongNgayO = action.payload;
    },
  },
});

export const {
  setLocationList,
  setSelectedLocation,
  setLocationListCard,
  setCurrentPage,
  setSoLuongNgayO,
  setStartDate,
  setEndDate,
} = homeSlice.actions;
export default homeSlice.reducer;
