// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchDanhSachPhongFull,
//   fetchDanhSachPhongTheoViTri,
// } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongThunk";
// import { Card } from "flowbite-react";
// import { useNavigate, useParams } from "react-router-dom";
// import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";

// export default function CardItemPhong() {
//   const { danhSachPhongFull } = useSelector(
//     (state) => state.danhSachPhongSlice
//   );
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   console.log(danhSachPhongFull);
//   useEffect(() => {
//     dispatch(fetchDanhSachPhongFull());
//   }, [dispatch]);
//   const { soLuongKhachHienTai, soLuongKhachToiDa } = useSelector(
//     (state) => state.chiTietPhongSlice
//   );

//   const renderCardItemPhong = () => {
//     return (
//       danhSachPhongFull &&
//       danhSachPhongFull.map((phong) => {
//         return (
//           <Card
//             onClick={() =>
//               navigate(
//                 `/Danh-Sach-Phong/${phong.maViTri}/Chi-Tiet-Phong/${phong.id}`
//               )
//             }
//             key={phong.id}
//             className="max-w-sm"
//             imgSrc={phong.hinhAnh}
//             horizontal
//           >
//             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               {phong.tenPhong}
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               {phong.khach} - phòng ngủ: {phong.phongNgu} - giường:{" "}
//               {phong.giuong} - phòng tắm: {phong.phongTam}{" "}
//               {phong.mayGiat ? "- Máy giặt" : ""}{" "}
//               {phong.banLa ? "- Bàn là" : ""} {phong.tivi ? "-Tivi" : ""}{" "}
//               {phong.dieuHoa ? "- Điều hòa" : ""}{" "}
//               {phong.hoBoi ? "- Hồ bơi" : ""}
//             </p>
//             <p className="text-xl font-bold text-gray-900 dark:text-white">
//               {phong.giaTien.toLocaleString()} VNĐ / đêm
//             </p>
//           </Card>
//         );
//       })
//     );
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-4">{renderCardItemPhong()}</div>;
//     </div>
//   );
// }
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDanhSachPhongFull,
  fetchDanhSachPhongTheoViTri,
} from "../../../redux/Reducers/DanhSachPhong/danhSachPhongThunk";
import { Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";
import UserSearch from "../../TrangChu/Layout/UserSearch";


import { Navigation, Pagination, Mousewheel, Keyboard, Ally, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../TrangChu/Layout/stypeCardDesign.css';

export default function CardItemPhong() {
  const { danhSachPhongFull } = useSelector(
    (state) => state.danhSachPhongSlice
  );
  const { startDate } = useSelector((state) => state.homeSlice);
  console.log("start day", startDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(danhSachPhongFull);

  const { soLuongKhachHienTai } = useSelector(
    (state) => state.chiTietPhongSlice
  );
  console.log(soLuongKhachHienTai);

  useEffect(() => {
    dispatch(fetchDanhSachPhongFull());
  }, [dispatch]);

  const renderCardItemPhong = () => {
    return (
      danhSachPhongFull &&
      danhSachPhongFull
        .filter((phong) => phong.khach >= soLuongKhachHienTai)
        .map((phong) => {
          return (
            <div className="rounded-3xl bg-white hover:bg-cyan-50 border border-transparent hover:border-cyan-200 shadow-md hover:shadow-xl duration-500" key={phong.id}
            onClick={() =>
              navigate(
                `/Danh-Sach-Phong/${phong.maViTri}/Chi-Tiet-Phong/${phong.id}`
              )
            }>
              <a href='' className="">
                <div className='relative'>
                  <div className='absolute top-4 px-4 z-10 flex justify-between w-full'>
                    <p className='bg-white rounded-3xl px-4 py-2 mr-2 hover:text-cyan-500 hover:px-6 duration-700 text-sm'>Homestay</p>
                    <div>
                      <i class="fa-solid fa-heart bg-white/70 rounded-3xl p-2 text-cyan-500 border border-white hover:bg-cyan-500 hover:text-white duration-700"></i>
                    </div>
                  </div>
                  <Swiper
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
                    <SwiperSlide><img src={phong.hinhAnh} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={phong.hinhAnh} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={phong.hinhAnh} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={phong.hinhAnh} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={phong.hinhAnh} alt="" /></SwiperSlide>
                  </Swiper>
                </div>

                <div className='p-4 text-cyan-700 hover:text-cyan-500 duration-500'>
                  <div className='flex justify-between'>
                    <p className='font-bold'>{phong.tenPhong}</p>
                    <p><i class="fa-solid fa-star pr-1 "></i>4.1</p>
                  </div>
                  <div className='text-black'>
                    <p>P. Ngủ: {phong.phongNgu} | Giường:{" "}{phong.giuong} | P. Tắm: {phong.phongTam}</p>
                    <p>Tiện ích: {phong.hoBoi ? "Hồ bơi. " : ""}{phong.tivi ? " Tivi." : ""}{" "}{phong.mayGiat ? " Máy giặt." : ""}</p>
                    <p className='font-bold'>{phong.giaTien.toLocaleString()} VNĐ / đêm</p>
                  </div>
                </div>
              </a>
              {/* <Card
                onClick={() =>
                  navigate(
                    `/Danh-Sach-Phong/${phong.maViTri}/Chi-Tiet-Phong/${phong.id}`
                  )
                }
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
                  {phong.banLa ? "- Bàn là" : ""} {phong.tivi ? "- Tivi" : ""}{" "}
                  {phong.dieuHoa ? "- Điều hòa" : ""}{" "}
                  {phong.hoBoi ? "- Hồ bơi" : ""}
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {phong.giaTien.toLocaleString()} VNĐ / đêm
                </p>
              </Card> */}
            </div>
          );
        })
    );
  };

  return (
    <div>
      <UserSearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-8 p-4">{renderCardItemPhong()}</div>
    </div>
  );
}
