import { http } from "../../../api/config";
import { setDanhSachPhong, setDanhSachPhongFull } from "./danhSachPhongSlice";

export const fetchDanhSachPhongTheoViTri = (idViTri) => async (dispatch) => {
  try {
    const response = await http.get(
      `phong-thue/lay-phong-theo-vi-tri?maViTri=${idViTri}`
    );
    const dataFromAPI = response.data.content;
    dispatch(setDanhSachPhong(dataFromAPI));
  } catch (error) {
    console.log("Failed to fetch danh sach phong: ", error);
  }
};

export const fetchDanhSachPhongFull = () => async (dispatch) => {
  try {
    const response = await http.get(`phong-thue`);
    const dataFromAPI = response.data.content;
    dispatch(setDanhSachPhongFull(dataFromAPI));
  } catch (error) {
    console.log("Failed to fetch danh sach phong full: ", error);
  }
};
