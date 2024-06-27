import { http } from "../../../api/config";
import {
  setViTriList,
  setTotalPages,
  addViTriToList,
  updateViTriInList,
  removeViTriFromList,
} from "./ViTriSlice";
import Swal from "sweetalert2";

export const fetchViTriData = (pageIndex) => async (dispatch) => {
  try {
    const response = await http.get(
      `vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=10`
    );
    const dataViTriList = response.data.content.data;
    const totalRow = response.data.content.totalRow;
    const pageSize = 10; // Số item trên mỗi trang
    const totalPages = Math.ceil(totalRow / pageSize);
    dispatch(setViTriList(dataViTriList));
    dispatch(setTotalPages(totalPages));
  } catch (error) {
    console.log("Failed to fetch vi tri data: ", error);
  }
};
export const addViTri = (formData) => async (dispatch) => {
  try {
    const response = await http.post("vi-tri", formData);
    dispatch(addViTriToList(response.data.content));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Thêm vị trí thành công!",
    });
  } catch (error) {
    console.log(
      "Failed to add vi tri: ",
      error.response ? error.response.data : error.message
    );
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi thêm vị trí!",
    });
  }
};
export const updateViTri = (formData) => async (dispatch) => {
  try {
    const response = await http.put(`vi-tri/${formData.id}`, formData);
    dispatch(updateViTriInList(response.data.content));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Cập nhật vị trí thành công!",
    });
  } catch (error) {
    console.log(
      "Failed to update vi tri: ",
      error.response ? error.response.data : error.message
    );
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi cập nhật vị trí!",
    });
  }
};

export const deleteViTri = (viTriId) => async (dispatch) => {
  try {
    await http.delete(`vi-tri/${viTriId}`);
    dispatch(removeViTriFromList(viTriId));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Xóa vị trí thành công!",
    });
  } catch (error) {
    console.log(
      "Failed to delete vi tri: ",
      error.response ? error.response.data : error.message
    );
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi xóa vị trí!",
    });
  }
};
export const searchViTri = (keyword) => async (dispatch) => {
  try {
    const response = await http.get(`vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`);
    return response.data.content.data;
  } catch (error) {
    console.log("Failed to search vi tri: ", error);
    throw error;
  }
};