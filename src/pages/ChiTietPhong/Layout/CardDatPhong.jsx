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
    <Card className="max-w-sm">
      <p>{chiTietPhong && chiTietPhong.giaTien}$ / đêm</p>
      <p>Đánh giá </p>
      <DateRangeSelect />
      <QuantityPeopleSelect />
      <p>Số lượng khách tối đa: {soLuongKhachToiDa}</p>

      <Button onClick={handleThanhToan}>Thanh toán</Button>
      <p>bạn vẫn chưa bị trừ tiền</p>

      <p>
        {chiTietPhong && chiTietPhong.giaTien.toLocaleString()} $ x{" "}
        {soLuongNgayO ? soLuongNgayO : 0} ={" "}
        {chiTietPhong && soLuongNgayO
          ? soLuongNgayO
          : 0 && (chiTietPhong.giaTien * soLuongNgayO).toLocaleString()}{" "}
        VNĐ
      </p>
      <p>Phí dịch vụ 10$</p>
      <p>
        Tổng cộng{" "}
        {chiTietPhong &&
          soLuongNgayO &&
          (chiTietPhong.giaTien * soLuongNgayO + 10).toLocaleString()}{" "}
        VNĐ
      </p>
    </Card>
  );
}
