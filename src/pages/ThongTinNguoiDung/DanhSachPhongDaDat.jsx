import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "flowbite-react";
import {
  fetchChiTietPhong,
  fetchMangPhongDaDat,
} from "../../redux/Reducers/UserInfo/UserThunk";

const DanhSachPhongDaDat = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;

  const { mangPhongDaDat, chiTietPhong } = useSelector(
    (state) => state.userInfoSlice
  );

  useEffect(() => {
    dispatch(fetchMangPhongDaDat(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (mangPhongDaDat.length > 0) {
      mangPhongDaDat.forEach((phong) => {
        dispatch(fetchChiTietPhong(phong.maPhong));
      });
    }
  }, [dispatch, mangPhongDaDat]);


  return (
    <div className="mx-auto w-full max-w-screen-2xl p-4 pb-6 lg:pb-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-yellow-500">Danh Sách Phòng Đã Đặt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
        {mangPhongDaDat.map((phong) => {
          const chiTiet = chiTietPhong[phong.maPhong];
          return (
            <div key={phong.id} className="">
              {chiTiet && (
                <>
                  <div className="BanTay h-full rounded-3xl bg-white hover:bg-cyan-50 border border-transparent hover:border-cyan-200 shadow-md hover:shadow-xl duration-500">
                    <div className='bg-center bg-cover rounded-3xl h-36 md:h-48' style={{ backgroundImage: `url(${chiTiet.hinhAnh})` }}>
                    </div>

                    <div className='p-4 text-cyan-700 hover:text-cyan-500 duration-500'>
                      <p className='font-bold text-xl'>{chiTiet.tenPhong}</p>
                      <p className=" text-black">
                        <span className="font-bold">P. Ngủ: </span>{chiTiet.phongNgu ? `${chiTiet.phongNgu} Phòng` : ""}
                        <br />
                        <span className="font-bold">Giường: </span>{chiTiet.giuong ? `${chiTiet.giuong} Giường` : ""}
                        <br />
                        <span className="font-bold">P. Tắm: </span>{chiTiet.phongTam ? `${chiTiet.phongTam} Phòng` : ""}
                      </p>
                      <p className=" text-black">
                        <span className="font-bold">Tiện ích: </span>
                        {chiTiet.dieuHoa === true ? "Điều hòa | " : ""}
                        {chiTiet.bep === true ? "Bếp | " : ""}
                        {chiTiet.doXe === true ? "Đỗ xe | " : ""}
                        {chiTiet.hoBoi === true ? "Hồ Bơi | " : ""}
                        {chiTiet.tivi === true ? "Tivi | " : ""}
                        {chiTiet.wifi === true ? "Wifi" : ""}
                      </p>
                      <p className="font-bold">
                        Số lượng khách: {chiTiet.khach}
                        <br />
                        Giá tiền: {chiTiet.giaTien} VNĐ
                      </p>
                    </div>
                  </div>

                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DanhSachPhongDaDat;
