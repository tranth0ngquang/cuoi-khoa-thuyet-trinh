import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedLocation } from "../../redux/Reducers/Home/homeSlice";
import CardItemPhong from "./Layout/CardItemPhong";

export default function DanhSachPhongTheoId() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSelectedLocation(null));
    };
  }, [dispatch]);
  return (
    <div>
      <img src="/img/BannerNav2.png" alt="" className="w-full pt-16 md:pt-0" />
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <CardItemPhong />
      </div>
    </div>
  );
}
