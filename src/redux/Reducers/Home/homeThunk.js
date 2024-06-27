import { http } from "../../../api/config";
import { setLocationList, setLocationListCard } from "./homeSlice";

export const fetchLocationList = () => async (dispatch) => {
  try {
    const response = await http.get(`vi-tri`);
    dispatch(setLocationList(response.data.content));
  } catch (error) {
    console.log(error.toString());
  }
};

export const fetchLocationListCard = (page) => async (dispatch) => {
  try {
    const response = await http.get(
      `vi-tri/phan-trang-tim-kiem?pageIndex=${page}&pageSize=8`
    );
    dispatch(setLocationListCard(response.data.content));
  } catch (error) {
    console.log(error.toString());
  }
};
