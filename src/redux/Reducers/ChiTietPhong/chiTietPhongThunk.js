import Swal from "sweetalert2";
import { http } from "../../../api/config";
import {
  setChiTietPhong,
  setMangBinhLuan,
  addBinhLuan,
} from "./chiTietPhongSlice";

export const fetchRoomDetail = (idSelectedRoom) => async (dispatch) => {
  try {
    const response = await http.get(`phong-thue/${idSelectedRoom}`);
    const dataFromAPI = response.data.content;
    dispatch(setChiTietPhong(dataFromAPI));
  } catch (error) {
    console.log("Failed to fetch danh sach phong: ", error);
  }
};

export const PostDatPhong = (infoDatPhong) => async () => {
  try {
    const response = await http.post("dat-phong", infoDatPhong);
    console.log("dat phong res", response.data);
    Swal.fire({
      icon: "success",
      title: "Đặt phòng thành công, chúc bạn có 1 kỳ nghỉ vui vẻ!",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Đặt phòng thất bại, vui lòng thử lại sau!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const fetchMangBinhLuan = (idPhong) => async (dispatch) => {
  try {
    const response = await http.get(
      `binh-luan/lay-binh-luan-theo-phong/${idPhong}`
    );
    let dataFromAPI = response.data.content;
    dispatch(setMangBinhLuan(dataFromAPI));
  } catch (error) {
    console.log("Failed to fetch danh sach phong: ", error);
  }
};

export const PostBinhLuan = (infoBinhLuan) => async (dispatch) => {
  try {
    // const response = await http.post("binh-luan", infoBinhLuan);
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    const response = await http.post("binh-luan", infoBinhLuan, {
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMSIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwNDk5MjQwMCwiZXhwIjoxNzI5MjcwODAwfQ.e_09en7cnMlh5fiMZWSMobMs9zSCjIXHgq-eMFxPlqg",
        token: token,
      },
    });
    console.log("binh luan res", response.data);
    console.log("infoBinhLuan", infoBinhLuan.maPhong);
    dispatch(fetchMangBinhLuan(infoBinhLuan.maPhong));
    Swal.fire({
      icon: "success",
      title: "Bình luận thành công nè!",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Bình luận thất bại, vui lòng thử lại sau!",
      showConfirmButton: false,
      timer: 1500,
    });
    throw error;
  }
};
