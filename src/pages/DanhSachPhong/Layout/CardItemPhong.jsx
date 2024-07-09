// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchDanhSachPhongTheoViTri } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongThunk";
// import { Card } from "flowbite-react";
// import { useNavigate, useParams } from "react-router-dom";
// import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";
// import { setIdSelectedRoom } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";
// import UserSearch from "../../TrangChu/Layout/UserSearch";

// export default function CardItemPhong() {
//   const { danhSachPhong } = useSelector((state) => state.danhSachPhongSlice);
//   const { selectedLocation } = useSelector((state) => state.homeSlice);
//   const { selectedLocationId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     dispatch(setSelectedLocation(selectedLocationId));
//     dispatch(fetchDanhSachPhongTheoViTri(selectedLocationId));
//   }, [dispatch, selectedLocationId]);
//   const { soLuongKhachHienTai } = useSelector(
//     (state) => state.chiTietPhongSlice
//   );
//   const renderCardItemPhong = () => {
//     if (danhSachPhong.length === 0)
//       return <p>Không có phòng đáp ứng đúng nhu cầu của bạn</p>;
//     else {
//       return (
//         danhSachPhong &&
//         danhSachPhong
//           .filter((phong) => phong.khach >= soLuongKhachHienTai)
//           .map((phong) => {
//             return (
//               <Card
//                 onClick={() => {
//                   dispatch(setIdSelectedRoom(phong.id));
//                   navigate(`Chi-Tiet-Phong/${phong.id}`);
//                 }}
//                 key={phong.id}
//                 className="max-w-sm"
//                 imgSrc={phong.hinhAnh}
//                 horizontal
//               >
//                 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {phong.tenPhong}
//                 </h5>
//                 <p className="font-normal text-gray-700 dark:text-gray-400">
//                   {phong.khach} - phòng ngủ: {phong.phongNgu} - giường:{" "}
//                   {phong.giuong} - phòng tắm: {phong.phongTam}{" "}
//                   {phong.mayGiat ? "- Máy giặt" : ""}{" "}
//                   {phong.banLa ? "- Bàn là" : ""} {phong.tivi ? "-Tivi" : ""}{" "}
//                   {phong.dieuHoa ? "- Điều hòa" : ""}{" "}
//                   {phong.hoBoi ? "- Hồ bơi" : ""}
//                 </p>
//                 <p className="text-xl font-bold text-gray-900 dark:text-white">
//                   {phong.giaTien.toLocaleString()} VNĐ / đêm
//                 </p>
//               </Card>
//             );
//           })
//       );
//     }
//   };

//   return (
//     <div>
//       <UserSearch />
//       <div className="grid grid-cols-4 gap-4">{renderCardItemPhong()}</div>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27142.308793420736!2d106.66859938725786!3d10.744694914795327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1718867036072!5m2!1svi!2s"
//         width={600}
//         height={450}
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Google Maps Embed"
//       />
//     </div>
//   );
// }
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDanhSachPhongTheoViTri } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongThunk";
import { Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";
import { setIdSelectedRoom } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";
import UserSearch from "../../TrangChu/Layout/UserSearch";

// Layout/CardDesignTong
import CardDesignTong from "../../TrangChu/Layout/CardDesignTong";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Ally,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../TrangChu/Layout/stypeCardDesign.css";

export default function CardItemPhong() {
  const { danhSachPhong } = useSelector((state) => state.danhSachPhongSlice);
  const { selectedLocation } = useSelector((state) => state.homeSlice);
  const { selectedLocationId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setSelectedLocation(selectedLocationId));
    dispatch(fetchDanhSachPhongTheoViTri(selectedLocationId));
  }, [dispatch, selectedLocationId]);

  const { soLuongKhachHienTai } = useSelector(
    (state) => state.chiTietPhongSlice
  );
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };
  const renderCardItemPhong = () => {
    const filteredPhong = danhSachPhong.filter(
      (phong) => phong.khach >= soLuongKhachHienTai
    );

    if (filteredPhong.length === 0) {
      return <p>Không có phòng đáp ứng đúng nhu cầu của bạn</p>;
    }

    return filteredPhong.map((phong) => (
      <div className="">
        <div
          className="BanTay rounded-3xl bg-white hover:bg-cyan-50 border border-transparent hover:border-cyan-200 shadow-md hover:shadow-xl duration-500"
          key={phong.id}
        // onClick={() => {
        //   dispatch(setIdSelectedRoom(phong.id));
        //   navigate(`Chi-Tiet-Phong/${phong.id}`);
        // }}
        >
          <div className="relative">
            <div className="absolute top-4 px-4 z-10 flex justify-between w-full">
              <p className="bg-white rounded-3xl px-4 py-2 mr-2 hover:text-cyan-500 hover:px-6 duration-700 text-sm">
                Homestay
              </p>
              <div>
                <i className="fa-solid fa-heart bg-white/70 rounded-3xl p-2 text-cyan-500 border border-white hover:bg-cyan-500 hover:text-white duration-700"></i>
              </div>
            </div>
            <Swiper
              onClick={() => {
                dispatch(setIdSelectedRoom(phong.id));
                navigate(`Chi-Tiet-Phong/${phong.id}`);
              }}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-3xl"
            >
              <SwiperSlide>
                <img src={phong.hinhAnh} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={phong.hinhAnh} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={phong.hinhAnh} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={phong.hinhAnh} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={phong.hinhAnh} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="p-4 text-cyan-700 hover:text-cyan-500 duration-500"
            onClick={() => {
              dispatch(setIdSelectedRoom(phong.id));
              navigate(`Chi-Tiet-Phong/${phong.id}`);
            }}>
            <div className="flex justify-between">
              <p className="font-bold">{truncateString(phong.tenPhong, 16)}</p>
              <p>
                <i className="fa-solid fa-star pr-1 "></i>4.1
              </p>
            </div>
            <div className="text-black">
              <p>
                P. Ngủ: {phong.phongNgu} | Giường: {phong.giuong}
              </p>
              <p>
                Tiện ích: {phong.hoBoi ? "Hồ bơi. " : ""}
                {phong.tivi ? " Tivi." : ""} {phong.mayGiat ? " Máy giặt." : ""}
              </p>
              <p className="font-bold">
                {phong.giaTien.toLocaleString()} VNĐ / đêm
              </p>
            </div>
          </div>
        </div>
        <div className="h-8"></div>
      </div>
    ));
  };

  return (
    <div>
      <UserSearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8 p-4">
        {renderCardItemPhong()}
      </div>
      <iframe
        className="p-4 w-full h-96 rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27142.308793420736!2d106.66859938725786!3d10.744694914795327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1718867036072!5m2!1svi!2s"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      />
      <CardDesignTong />
    </div>
  );
}
