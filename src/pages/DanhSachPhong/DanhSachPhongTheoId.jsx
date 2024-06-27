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
      <CardItemPhong />
    </div>
  );
}
