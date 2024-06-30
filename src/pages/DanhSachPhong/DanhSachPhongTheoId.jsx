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
    <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
      <h3 className="pb-8 text-white font-bold text-2xl uppercase">tách nền</h3>
      <CardItemPhong />
    </div>
  );
}
