import React from "react";
import QuanLyThongTinDatPhong from "./Layout/QuanLyThongTinDatPhong";
import QuanTriNguoiDung from "./Layout/QuanTriNguoiDung";
import QuanLyViTri from "./Layout/QuanLyViTri";
import QuanLyPhong from "./Layout/QuanLyPhong";

const QuanTri = () => {
  return (
    <div>
      <QuanLyPhong />
      <QuanLyThongTinDatPhong />
      <QuanTriNguoiDung />
      <QuanLyViTri />
    </div>
  );
};

export default QuanTri;
