import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setIdSelectedRoom } from "../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";
import { fetchRoomDetail } from "../../redux/Reducers/ChiTietPhong/chiTietPhongThunk";
import CardDatPhong from "./Layout/CardDatPhong";
import CommentComponent from "./Layout/CommentComponent";

export default function ChiTietPhong() {
  const { idSelectedRoomParams } = useParams();
  const dispatch = useDispatch();
  const { chiTietPhong } = useSelector((state) => state.chiTietPhongSlice);

  useEffect(() => {
    dispatch(setIdSelectedRoom(idSelectedRoomParams));
    dispatch(fetchRoomDetail(idSelectedRoomParams));
  }, [dispatch, idSelectedRoomParams]);

  console.log(chiTietPhong);
  return (
    <div>
      <h1>{chiTietPhong && chiTietPhong.tenPhong}</h1>
      <img
        src={chiTietPhong && chiTietPhong.hinhAnh}
        alt="anh chi tiet cua phong"
      />
      <CardDatPhong />
      <CommentComponent />
      
    </div>
  );
}
