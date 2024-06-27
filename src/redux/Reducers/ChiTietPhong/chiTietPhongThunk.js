



import { http } from "../../../api/config";
import { setChiTietPhong, setMangBinhLuan, addBinhLuan } from "./chiTietPhongSlice";

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
    return response;
  } catch (error) {
    throw error;
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
    const response = await http.post("binh-luan", infoBinhLuan);
    console.log("binh luan res", response.data);
    dispatch(addBinhLuan(response.data.content)); // Thêm bình luận mới vào Redux store
    return response;
  } catch (error) {
    throw error;
  }
};
