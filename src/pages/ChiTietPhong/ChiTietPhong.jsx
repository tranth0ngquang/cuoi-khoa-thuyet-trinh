

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setIdSelectedRoom } from "../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";
import { fetchRoomDetail } from "../../redux/Reducers/ChiTietPhong/chiTietPhongThunk";
import CardDatPhong from "./Layout/CardDatPhong";
import CommentComponent from "./Layout/CommentComponent";
import { setSoLuongKhachToiDa } from "../../redux/Reducers/ChiTietPhong/chiTietPhongSlice";
import TienNghiComponent from "./Layout/TienNghiComponent";
import ChiTietPhu from "./Layout/ChiTietPhu";

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

  return (
    <div>
      <img src="/img/BannerNav4.png" alt="" className="w-full pt-16 md:pt-0" />
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <h1 className="pb-4 text-cyan-700 font-bold text-xl md:text-3xl uppercase text-center">{chiTietPhong && chiTietPhong.tenPhong}</h1>
        <div className="flex justify-center pb-6">
          <div className="BanTay text-stone-500 hover:text-cyan-500 duration-500 pr-2">
            <i className="fa-solid fa-arrow-up-from-bracket px-2"></i>
            <span>Chia Sẻ</span>
          </div>
          <div className="BanTay text-stone-500 hover:text-cyan-500 duration-500 pl-2">
            <i className="fa-solid fa-heart px-2"></i>
            <span>Yêu thích</span>
          </div>

        </div>
        <img className="w-full rounded-3xl" src={chiTietPhong && chiTietPhong.hinhAnh} alt="anh chi tiet cua phong" />

        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-5 my-8 p-4">
          <div className="col-span-1 lg:col-span-3 xl:col-span-2">
            <TienNghiComponent />
            <CommentComponent />
          </div>

          <div className="col-span-1 lg:col-span-2 xl:col-span-1">
            <CardDatPhong />
          </div>

        </div>

        <ChiTietPhu />
      </div>

    </div>
  );
}
