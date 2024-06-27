// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { http } from "../../../api/config";
// import {
//   setChiTietPhong,
//   setMangPhongDaDat,
//   setUserInfor,
// } from "./UserInfoSlice";

// export const fetchMangPhongDaDat = (userId) => async (dispatch) => {
//   try {
//     const response = await http.get(`dat-phong/lay-theo-nguoi-dung/${userId}`);
//     dispatch(setMangPhongDaDat(response.data.content));
//   } catch (error) {
//     console.log(error.toString());
//   }
// };

// export const PutCapNhatUser = createAsyncThunk(
//   "user/updateUser",
//   async ({ userID, infoCapNhat }, thunkAPI) => {
//     try {
//       const response = await http.put(`users/${userID}`, infoCapNhat);
//       console.log("cap nhat", response.data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const uploadAvatar = createAsyncThunk(
//   "user/uploadAvatar",
//   async ({ formData }, thunkAPI) => {
//     try {
//       const response = await http.post(`users/upload-avatar`, formData);
//       console.log("cap nhat", response.data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const fetchUserInfo = (userId) => async (dispatch) => {
//   try {
//     const response = await http.get(`users/${userId}`);
//     dispatch(setUserInfor(response.data.content));
//   } catch (error) {
//     console.log(error.toString());
//   }
// };

// export const fetchChiTietPhong = (roomID) => async (dispatch) => {
//   try {
//     const response = await http.get(`phong-thue/${roomID}`);
//     dispatch(setChiTietPhong(response.data.content));
//   } catch (error) {
//     console.log(error.toString());
//   }
// };





import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../api/config";
import {
  setChiTietPhong,
  setMangPhongDaDat,
  setUserInfor,
} from "./UserInfoSlice";

export const fetchMangPhongDaDat = (userId) => async (dispatch) => {
  try {
    const response = await http.get(`dat-phong/lay-theo-nguoi-dung/${userId}`);
    dispatch(setMangPhongDaDat(response.data.content));
  } catch (error) {
    console.log(error.toString());
  }
};

export const PutCapNhatUser = createAsyncThunk(
  "user/updateUser",
  async ({ userID, infoCapNhat }, thunkAPI) => {
    try {
      const response = await http.put(`users/${userID}`, infoCapNhat);
      console.log("cap nhat", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  "user/uploadAvatar",
  async ({ formData }, thunkAPI) => {
    try {
      const response = await http.post(`users/upload-avatar`, formData);
      console.log("cap nhat", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserInfo = (userId) => async (dispatch) => {
  try {
    const response = await http.get(`users/${userId}`);
    dispatch(setUserInfor(response.data.content));
  } catch (error) {
    console.log(error.toString());
  }
};

export const fetchChiTietPhong = (roomID) => async (dispatch) => {
  try {
    const response = await http.get(`phong-thue/${roomID}`);
    dispatch(setChiTietPhong({ id: roomID, data: response.data.content }));
  } catch (error) {
    console.log(error.toString());
  }
};
