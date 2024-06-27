import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDanhSachPhongFull,
  fetchDanhSachPhongTheoViTri,
} from "../../../redux/Reducers/DanhSachPhong/danhSachPhongThunk";
import { Card } from "flowbite-react";
import { useParams } from "react-router-dom";
import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";

export default function CardItemPhong() {
  const { danhSachPhongFull } = useSelector(
    (state) => state.danhSachPhongSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDanhSachPhongFull());
  }, [dispatch]);


  const renderCardItemPhong = () => {
    return (
      danhSachPhongFull &&
      danhSachPhongFull.map((phong) => {
        return (
          <Card
            key={phong.id}
            className="max-w-sm"
            imgSrc={phong.hinhAnh}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {phong.tenPhong}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {phong.khach} - phòng ngủ: {phong.phongNgu} - giường:{" "}
              {phong.giuong} - phòng tắm: {phong.phongTam}{" "}
              {phong.mayGiat ? "- Máy giặt" : ""}{" "}
              {phong.banLa ? "- Bàn là" : ""} {phong.tivi ? "-Tivi" : ""}{" "}
              {phong.dieuHoa ? "- Điều hòa" : ""}{" "}
              {phong.hoBoi ? "- Hồ bơi" : ""}
            </p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {phong.giaTien.toLocaleString()} VNĐ / đêm
            </p>
          </Card>
        );
      })
    );
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">{renderCardItemPhong()}</div>;
    </div>
  );
}
