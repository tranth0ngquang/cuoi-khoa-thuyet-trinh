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

  console.log(chiTietPhong);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh Sách Phòng Đã Đặt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mangPhongDaDat.map((phong) => {
          const chiTiet = chiTietPhong[phong.maPhong];
          return (
            <Card key={phong.id} className="p-4">
              {chiTiet && (
                <>
                  <img src={chiTiet.hinhAnh} alt={chiTiet.tenPhong} />
                  <h2 className="text-xl font-semibold mb-2">
                    {chiTiet.tenPhong}
                  </h2>
                  <p>{chiTiet.dieuHoa === true ? "Điều hòa" : ""}</p>
                  <p>{chiTiet.bep === true ? "bếp" : ""}</p>
                  <p>{chiTiet.doXe === true ? "doXe" : ""}</p>
                  <p>{chiTiet.giuong ? `giuong:${chiTiet.giuong} ` : ""}</p>
                  <p>{chiTiet.hoBoi === true ? "hoBoi" : ""}</p>
                  <p>
                    {chiTiet.phongNgu ? `phongNgu:${chiTiet.phongNgu} ` : ""}
                  </p>
                  <p>
                    {chiTiet.phongTam ? `phongTam:${chiTiet.phongTam} ` : ""}
                  </p>
                  <p>{chiTiet.tivi === true ? "tivi" : ""}</p>
                  <p>{chiTiet.wifi === true ? "wifi" : ""}</p>
                  <p>Số lượng khách: {chiTiet.khach}</p>
                  <p>Giá tiền: {chiTiet.giaTien} $</p>
                </>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DanhSachPhongDaDat;
