import { http } from "../../../api/config";
import {
  setPhongList,
  setTotalPages,
  addPhongToList,
  updatePhongInList,
  removePhongFromList,
} from "./QuanLyPhongSlice";
import Swal from "sweetalert2";

export const fetchPhongData = (pageIndex, keyword = "") => async (dispatch) => {
  try {
    const response = await http.get(
      `phong-thue/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=5&keyword=${keyword}`
    );
    const dataPhongList = response.data.content.data;
    const totalRow = response.data.content.totalRow;
    const pageSize = 5; // Số item trên mỗi trang
    const totalPages = Math.ceil(totalRow / pageSize);
    dispatch(setPhongList(dataPhongList));
    dispatch(setTotalPages(totalPages));
  } catch (error) {
    console.log("Failed to fetch phong data: ", error);
  }
};

export const addPhong = (formData) => async (dispatch) => {
  try {
    const response = await http.post("phong-thue", formData);
    dispatch(addPhongToList(response.data.content));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Thêm phòng thành công!",
    });
  } catch (error) {
    console.log("Failed to add phong: ", error.response ? error.response.data : error.message);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi thêm phòng!",
    });
  }
};

export const updatePhong = (formData) => async (dispatch) => {
  try {
    const response = await http.put(`phong-thue/${formData.id}`, formData);
    dispatch(updatePhongInList(response.data.content));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Cập nhật phòng thành công!",
    });
  } catch (error) {
    console.log("Failed to update phong: ", error.response ? error.response.data : error.message);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi cập nhật phòng!",
    });
  }
};

export const deletePhong = (id) => async (dispatch) => {
  try {
    await http.delete(`phong-thue/${id}`);
    dispatch(removePhongFromList(id));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Xóa phòng thành công!",
    });
  } catch (error) {
    console.log("Failed to delete phong: ", error.response ? error.response.data : error.message);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi xóa phòng!",
    });
  }
};
