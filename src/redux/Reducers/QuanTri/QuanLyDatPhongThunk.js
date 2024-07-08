// import { http } from "../../../api/config";
// import {
//   setDatPhongList,
//   updateDatPhongInList,
//   removeDatPhongFromList,
//   setUserDetail,
// } from "./QuanLyDatPhongSlice";
// import Swal from "sweetalert2";

// export const fetchUserDetail = (id) => async (dispatch) => {
//   try {
//     const response = await http.get(`users/${id}`);
//     dispatch(setUserDetail(response.data.content));
//   } catch (error) {
//     console.log("Failed to fetch user detail: ", error);
//     Swal.fire({
//       icon: "error",
//       title: "Thất bại",
//       text: "Lỗi! Người dùng không tồn tại!",
//     });
//   }
// };

// export const fetchDatPhongData = () => async (dispatch) => {
//   try {
//     const response = await http.get("dat-phong");
//     dispatch(setDatPhongList(response.data.content));
//   } catch (error) {
//     console.log("Failed to fetch dat phong data: ", error);
//     Swal.fire({
//       icon: "error",
//       title: "Thất bại",
//       text: "Đã xảy ra lỗi khi lấy dữ liệu đặt phòng!",
//     });
//   }
// };

// export const updateDatPhong = (formData) => async (dispatch) => {
//   try {
//     const response = await http.put(`dat-phong/${formData.id}`, formData);
//     dispatch(updateDatPhongInList(response.data.content));
//     Swal.fire({
//       icon: "success",
//       title: "Thành công",
//       text: "Cập nhật đặt phòng thành công!",
//     });
//   } catch (error) {
//     console.log("Failed to update dat phong: ", error);
//     Swal.fire({
//       icon: "error",
//       title: "Thất bại",
//       text: "Đã xảy ra lỗi khi cập nhật đặt phòng!",
//     });
//   }
// };

// export const deleteDatPhong = (id) => async (dispatch) => {
//   try {
//     await http.delete(`dat-phong/${id}`);
//     dispatch(removeDatPhongFromList(id));
//     Swal.fire({
//       icon: "success",
//       title: "Thành công",
//       text: "Xóa đặt phòng thành công!",
//     });
//   } catch (error) {
//     console.log("Failed to delete dat phong: ", error);
//     Swal.fire({
//       icon: "error",
//       title: "Thất bại",
//       text: "Đã xảy ra lỗi khi xóa đặt phòng!",
//     });
//   }
// };
// -----------------
import { http } from "../../../api/config";
import {
  setDatPhongList,
  updateDatPhongInList,
  removeDatPhongFromList,
  setUserDetail,
} from "./QuanLyDatPhongSlice";
import Swal from "sweetalert2";

export const fetchUserDetail = (id) => async (dispatch) => {
  try {
    const response = await http.get(`users/${id}`);
    dispatch(setUserDetail(response.data.content));
  } catch (error) {
    console.log("Failed to fetch user detail: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Lỗi! Người dùng không tồn tại!",
    });
  }
};

export const fetchDatPhongData = () => async (dispatch) => {
  try {
    const response = await http.get("dat-phong");
    dispatch(setDatPhongList(response.data.content));
  } catch (error) {
    console.log("Failed to fetch dat phong data: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi lấy dữ liệu đặt phòng!",
    });
  }
};

export const fetchDatPhongTheoNguoiDung = (maNguoiDung) => async (dispatch) => {
  try {
    const response = await http.get(
      `dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`
    );
    dispatch(setDatPhongList(response.data.content));
  } catch (error) {
    console.log("Failed to fetch dat phong data by user: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi lấy dữ liệu đặt phòng theo người dùng!",
    });
  }
};

export const updateDatPhong = (formData) => async (dispatch) => {
  try {
    const response = await http.put(`dat-phong/${formData.id}`, formData);
    dispatch(updateDatPhongInList(response.data.content));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Cập nhật đặt phòng thành công!",
    });
  } catch (error) {
    console.log("Failed to update dat phong: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi cập nhật đặt phòng!",
    });
  }
};

export const deleteDatPhong = (id) => async (dispatch) => {
  try {
    await http.delete(`dat-phong/${id}`);
    dispatch(removeDatPhongFromList(id));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Xóa đặt phòng thành công!",
    });
  } catch (error) {
    console.log("Failed to delete dat phong: ", error);
    Swal.fire({
      icon: "error",
      title: "Thất bại",
      text: "Đã xảy ra lỗi khi xóa đặt phòng!",
    });
  }
};
