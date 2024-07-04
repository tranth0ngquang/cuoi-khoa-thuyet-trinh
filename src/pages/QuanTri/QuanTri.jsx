import React, { useEffect } from "react";
import QuanLyThongTinDatPhong from "./Layout/QuanLyThongTinDatPhong";
import QuanTriNguoiDung from "./Layout/QuanTriNguoiDung";
import QuanLyViTri from "./Layout/QuanLyViTri";
import QuanLyPhong from "./Layout/QuanLyPhong";
import { useNavigate } from "react-router-dom";

const QuanTri = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("user"));
  //   console.log(userInfo);
  //   if (!userInfo || userInfo.role !== "ADMIN") {
  //     navigate("/");
  //   }
  // }, [navigate]);


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
