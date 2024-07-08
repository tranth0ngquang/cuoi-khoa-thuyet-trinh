import { http } from "../../../api/config";
import { setBinhLuanList, removeBinhLuanFromList } from "./QuanLyBinhLuanSlice";
import Swal from "sweetalert2";

export const fetchBinhLuanData = () => async (dispatch) => {
  try {
    const response = await http.get("binh-luan");
    dispatch(setBinhLuanList(response.data.content));
  } catch (error) {
    console.log("Failed to fetch binh luan data: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi lấy dữ liệu bình luận!",
    });
  }
};

export const fetchBinhLuanTheoPhong = (maPhong) => async (dispatch) => {
  try {
    const response = await http.get(
      `binh-luan/lay-binh-luan-theo-phong/${maPhong}`
    );
    dispatch(setBinhLuanList(response.data.content));
  } catch (error) {
    console.log("Failed to fetch binh luan theo phong: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi tìm kiếm bình luận!",
    });
  }
};

export const deleteBinhLuan = (id) => async (dispatch) => {
  try {
    await http.delete(`binh-luan/${id}`);
    dispatch(removeBinhLuanFromList(id));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Xóa bình luận thành công!",
    });
  } catch (error) {
    console.log("Failed to delete binh luan: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi xóa bình luận!",
    });
  }
};
