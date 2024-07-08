import Swal from "sweetalert2";
import { http } from "../../../api/config";
import {
  setDangKyThanhCong,
  setDangNhapThanhCong,
  setUserID,
  setUserInfo,
} from "./dangKySlice";

export const PostDangKy = (dataForm) => async (dispatch) => {
  try {
    const response = await http.post(`auth/signup`, dataForm);
    const dataFromAPI = response.data.content;
    dispatch(setDangKyThanhCong(dataFromAPI));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Đăng ký thành công!",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đăng ký thất bại",
    });
  }
};

export const PostDangNhap = (dataForm) => async (dispatch) => {
  try {
    const response = await http.post(`auth/signin`, dataForm);
    const dataFromAPI = response.data.content;
    dispatch(setUserID(dataFromAPI.user.id));
    dispatch(setUserInfo(dataFromAPI.user));
    dispatch(setDangNhapThanhCong(dataFromAPI));
    return response;
  } catch (error) {
    console.log("Failed to post dang nhap: ", error);
    throw error;
  }
};
