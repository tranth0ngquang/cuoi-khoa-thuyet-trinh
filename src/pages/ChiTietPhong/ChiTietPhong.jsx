

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setIdSelectedRoom } from "../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";
import { fetchRoomDetail } from "../../redux/Reducers/ChiTietPhong/chiTietPhongThunk";
import CardDatPhong from "./Layout/CardDatPhong";
import CommentComponent from "./Layout/CommentComponent";
import { setSoLuongKhachToiDa } from "../../redux/Reducers/ChiTietPhong/chiTietPhongSlice";
import TienNghiComponent from "./Layout/TienNghiComponent";

export default function ChiTietPhong() {
  const { idSelectedRoomParams } = useParams();
  const dispatch = useDispatch();
  const { chiTietPhong, soLuongKhachToiDa } = useSelector(
    (state) => state.chiTietPhongSlice
  );
  useEffect(() => {
    dispatch(setIdSelectedRoom(idSelectedRoomParams));
    dispatch(fetchRoomDetail(idSelectedRoomParams));

    return () => {
      dispatch(setSoLuongKhachToiDa(99));
    };
  }, [dispatch, idSelectedRoomParams]);

  console.log(chiTietPhong);
  return (
    <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
      <h3 className="pb-8 text-white font-bold text-2xl uppercase">tách nền</h3>
      <h1 className="pb-8 text-cyan-500 font-bold text-2xl uppercase">{chiTietPhong && chiTietPhong.tenPhong}</h1>
      <img
        className="rounded-3xl"
        src={chiTietPhong && chiTietPhong.hinhAnh}
        alt="anh chi tiet cua phong"
      />

      <div className="grid grid-cols-3 gap-5 my-8">
        <div className="col-span-2">
          <TienNghiComponent />
          <CommentComponent />
        </div>

        <CardDatPhong />
      </div>
    </div>
  );
}
