
import { http } from "../../../api/config";
import {
  setUserList,
  setTotalPages,
  addUserToList,
  updateUserInList,
  removeUserFromList,
} from "./QuanTriSlice";
import Swal from "sweetalert2";

export const fetchUserData = (pageIndex) => async (dispatch) => {
  try {
    const response = await http.get(
      `users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=10`
    );
    const dataUserList = response.data.content.data;
    const totalPage = response.data.content.totalRow;
    dispatch(setUserList(dataUserList));
    dispatch(setTotalPages(totalPage));
  } catch (error) {
    console.log("Failed to fetch danh sach phong full: ", error);
  }
};

export const addUser = (formData) => async (dispatch) => {
  try {
    await http.post("users", formData);
    dispatch(addUserToList(formData));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Dữ liệu đã được gửi thành công!",
    });
  } catch (error) {
    console.log("Failed to add user: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi gửi dữ liệu!",
    });
  }
};

export const updateUser = (formData) => async (dispatch) => {
  try {
    const response = await http.put(`users/${formData.id}`, formData);
    dispatch(updateUserInList(response.data));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Cập nhật người dùng thành công!",
    });
  } catch (error) {
    console.log("Failed to update user: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi cập nhật dữ liệu!",
    });
  }
};

export const searchUser = (query) => async (dispatch) => {
  try {
    const response = await http.get(`users/search/${query}`);
    return response.data.content;
  } catch (error) {
    console.log("Failed to search user: ", error);
    throw error;
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await http.delete(`users?id=${userId}`);
    dispatch(removeUserFromList(userId));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Người dùng đã được xóa thành công!",
    });
  } catch (error) {
    console.log("Failed to delete user: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi xóa người dùng!",
    });
  }
};
