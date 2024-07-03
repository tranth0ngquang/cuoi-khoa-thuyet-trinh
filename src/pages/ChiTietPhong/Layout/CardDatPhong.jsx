"use client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, Card } from "flowbite-react";
import LocationSelect from "../../TrangChu/Layout/LocationSelect";
import DateRangeSelect from "../../TrangChu/Layout/DateRangeSelect";
import QuantityPeopleSelect from "../../TrangChu/Layout/QuantityPeopleSelect";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIdSelectedRoom } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";
import {
  PostDatPhong,
  fetchRoomDetail,
} from "../../../redux/Reducers/ChiTietPhong/chiTietPhongThunk";
import {
  setIsAdmin,
  setIsnotAdmin,
  setStateLogin,
  setStateLogout,
} from "../../../redux/Reducers/LoginStatus/LoginStatusSlice";

import { setUserID } from "../../../redux/Reducers/DangKy/dangKySlice";
const MySwal = withReactContent(Swal);

export default function CardDatPhong() {
  const { idSelectedRoomParams } = useParams();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.loginStatusSlice);
  const infoUser = JSON.parse(localStorage.getItem("user"));

  const { userID } = useSelector((state) => state.dangKySlice);

  const { chiTietPhong, soLuongKhachHienTai, soLuongKhachToiDa } = useSelector(
    (state) => state.chiTietPhongSlice
  );
  const { soLuongNgayO, startDate, endDate } = useSelector(
    (state) => state.homeSlice
  );

  console.log("startday-endday", startDate, endDate);
  const { idSelectedRoom } = useSelector((state) => state.danhSachPhongSlice);
  useEffect(() => {
    dispatch(setIdSelectedRoom(idSelectedRoomParams));
    dispatch(fetchRoomDetail(idSelectedRoomParams));
  }, [dispatch, idSelectedRoomParams]);

  const handleThanhToan = () => {
    if (!isLogin) {
      MySwal.fire({
        title: "Cảnh báo",
        text: "Bạn phải đăng nhập mới có thể đặt phòng",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!startDate || !endDate) {
      MySwal.fire({
        title: "Cảnh báo",
        text: "Bạn phải chọn ngày đến và ngày đi",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    // Chuyển đổi ngày sang định dạng ISO
    const convertToISO = (dateString) => {
      const [day, month, year] = dateString.split("/");
      return `${year}-${month}-${day}`;
    };
    const paymentData = {
      maPhong: idSelectedRoom,
      ngayDen: convertToISO(startDate),
      ngayDi: convertToISO(endDate),
      soLuongKhach: soLuongKhachHienTai,
      maNguoiDung: userID,
    };

    console.log("paymentData", paymentData);
    dispatch(PostDatPhong(paymentData));
  };

  return (
    <div className="w-full">
      <div className="w-full rounded-3xl shadow-xl border">
        <div className="flex justify-between items-center p-4">
          <p>Giá: <span className="font-bold text-3xl text-cyan-500">{chiTietPhong && chiTietPhong.giaTien}</span> VNĐ / đêm</p>
          <p><i className="fa-solid fa-star pr-1 text-cyan-500"></i>4.9</p>
        </div>

        <div className="text-center">
          <DateRangeSelect />
          <QuantityPeopleSelect />
          <p className="text-sm italic text-cyan-500">Số lượng khách tối đa: {soLuongKhachToiDa}</p>
        </div>

        <div className="text-center py-2">
          <button className="bg-cyan-700 hover:bg-cyan-500 duration-500 text-white font-bold text-xl rounded-3xl py-2 px-16" onClick={handleThanhToan}>Thanh toán</button>
          <p className="text-sm italic text-cyan-500 pt-2 pb-2">Bạn vẫn chưa bị trừ tiền</p>
        </div>

        <hr />
        <div className="flex justify-between items-center p-4">
          <div className="">
            <p>
              {chiTietPhong && chiTietPhong.giaTien.toLocaleString()} VNĐ x{" "} {soLuongNgayO ? soLuongNgayO : 0} đêm
            </p>
            <p>Phí dịch vụ</p>
          </div>
          <div className="text-right">
            <p>
              {chiTietPhong && soLuongNgayO && (chiTietPhong.giaTien * soLuongNgayO).toLocaleString()}{" "}VNĐ
            </p>
            <p>10 VNĐ</p>
          </div>

        </div>

        <hr />
        <div className="flex justify-between items-center p-4 text-xl font-bold bg-cyan-500 text-white rounded-b-3xl">
          <div className="">
            <p>Tổng cộng</p>
          </div>
          <div className="text-right">
            <p>
            {chiTietPhong && soLuongNgayO && (chiTietPhong.giaTien * soLuongNgayO + 10).toLocaleString()}{" "}VNĐ
            </p>
          </div>

        </div>


        {/* <p>
            {chiTietPhong && chiTietPhong.giaTien.toLocaleString()}VNĐ x{" "}
            {soLuongNgayO ? soLuongNgayO : 0} ={" "}
            {chiTietPhong && soLuongNgayO
              ? soLuongNgayO
              : 0 && (chiTietPhong.giaTien * soLuongNgayO).toLocaleString()}{" "}
            VNĐ
          </p>
          <p>Phí dịch vụ 10VNĐ</p>
          <p>
            Tổng cộng{" "}
            {chiTietPhong &&
              soLuongNgayO &&
              (chiTietPhong.giaTien * soLuongNgayO + 10).toLocaleString()}{" "}
            VNĐ
          </p> */}

      </div>

    </div>
  );
}
