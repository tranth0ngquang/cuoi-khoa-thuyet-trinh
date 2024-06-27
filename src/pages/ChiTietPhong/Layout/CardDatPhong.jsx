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
const MySwal = withReactContent(Swal);

export default function CardDatPhong() {
  const { idSelectedRoomParams } = useParams();
  const dispatch = useDispatch();
  const { chiTietPhong, soLuongKhachHienTai } = useSelector(
    (state) => state.chiTietPhongSlice
  );
  const { soLuongNgayO, startDate, endDate } = useSelector(
    (state) => state.homeSlice
  );
  const { idSelectedRoom } = useSelector((state) => state.danhSachPhongSlice);
  useEffect(() => {
    dispatch(setIdSelectedRoom(idSelectedRoomParams));
    dispatch(fetchRoomDetail(idSelectedRoomParams));
  }, [dispatch, idSelectedRoomParams]);

  const handleThanhToan = () => {
    const paymentData = {
      maPhong: idSelectedRoom,
      ngayDen: startDate,
      ngayDi: endDate,
      soLuongKhach: soLuongKhachHienTai,
      maNguoiDung: 5025,
    };
    dispatch(PostDatPhong(paymentData));
    MySwal.fire({
      title: "Đặt phòng thành công",
      text: "Chúc bạn có một kỳ nghỉ vui vẻ",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <Card className="max-w-sm">
      <p>{chiTietPhong && chiTietPhong.giaTien}$ / đêm</p>
      {/* chỗ này đánh giá này a thêm mấy cái dấu star vào rồi css cứng đi
      api ko trả cái này
      */}
      <p>Đánh giá </p>
      <DateRangeSelect />
      <QuantityPeopleSelect />

      <Button onClick={handleThanhToan}>Thanh toán</Button>
      <p>bạn vẫn chưa bị trừ tiền</p>

      <p>
        {chiTietPhong && chiTietPhong.giaTien.toLocaleString()} $ x{" "}
        {soLuongNgayO} ={" "}
        {chiTietPhong &&
          soLuongNgayO &&
          (chiTietPhong.giaTien * soLuongNgayO).toLocaleString()}{" "}
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
