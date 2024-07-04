import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
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
      const updatedUser = response.data.content;
      thunkAPI.dispatch(setUserInfor(updatedUser));
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const uploadAvatar = (formData) => async (dispatch) => {
  try {
    // const response = await http.post(`users/upload-avatar`, formData);
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    const response = await http.post("users/upload-avatar", formData, {
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMSIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwNDk5MjQwMCwiZXhwIjoxNzI5MjcwODAwfQ.e_09en7cnMlh5fiMZWSMobMs9zSCjIXHgq-eMFxPlqg",
        token: token,
      },
    });

    const updatedUser = response.data.content;
    dispatch(fetchUserInfo(updatedUser.id));
    localStorage.setItem("user", JSON.stringify(updatedUser));
    Swal.fire({
      title: "Thành công!",
      text: "Cập nhật ảnh đại diện thành công!",
      icon: "success",
    });
  } catch (error) {
    Swal.fire({
      title: "Lỗi!",
      text: "Cập nhật ảnh đại diện thất bại!",
      icon: "error",
    });
  }
};

export const fetchUserInfo = (userId) => async (dispatch) => {
  try {
    const response = await http.get(`users/${userId}`);
    dispatch(setUserInfor(response.data.content));
  } catch (error) {}
};

export const fetchChiTietPhong = (roomID) => async (dispatch) => {
  try {
    const response = await http.get(`phong-thue/${roomID}`);
    dispatch(setChiTietPhong({ id: roomID, data: response.data.content }));
  } catch (error) {
    console.log(error.toString());
  }
};
