import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDanhSachPhongTheoViTri } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongThunk";
import { Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";
import { setIdSelectedRoom } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";

export default function CardItemPhong() {
  const { danhSachPhong } = useSelector((state) => state.danhSachPhongSlice);
  const { selectedLocation } = useSelector((state) => state.homeSlice);
  const { selectedLocationId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setSelectedLocation(selectedLocationId));
    dispatch(fetchDanhSachPhongTheoViTri(selectedLocationId));
  }, [dispatch, selectedLocation, selectedLocationId]);


  const renderCardItemPhong = () => {
    return (
      danhSachPhong &&
      danhSachPhong.map((phong) => {
        return (
          <Card
            onClick={() => {
              dispatch(setIdSelectedRoom(phong.id));
              navigate(`Chi-Tiet-Phong/${phong.id}`);
            }}
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27142.308793420736!2d106.66859938725786!3d10.744694914795327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1718867036072!5m2!1svi!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      />
    </div>
  );
}
