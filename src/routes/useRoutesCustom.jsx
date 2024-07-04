import React from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../template/UserTemplate";
import TrangChu from "../pages/TrangChu/TrangChu";
import DanhSachPhongTheoId from "../pages/DanhSachPhong/DanhSachPhongTheoId";
import ChiTietPhong from "../pages/ChiTietPhong/ChiTietPhong";
import ThongTinNguoiDung from "../pages/ThongTinNguoiDung/ThongTinNguoiDung";
import QuanTri from "../pages/QuanTri/QuanTri";
import DanhSachPhongFull from "../pages/DanhSachPhong/DanhSachPhongFull";
import { DangKy } from "../pages/DangKy/DangKy";
import { DangNhap } from "../pages/DangKy/DanhNhap";
import QuanLyThongTinDatPhong from "../pages/QuanTri/Layout/QuanLyThongTinDatPhong";
import QuanLyViTri from "../pages/QuanTri/Layout/QuanLyViTri";
import QuanTriNguoiDung from "../pages/QuanTri/Layout/QuanTriNguoiDung";
import QuanLyPhong from "../pages/QuanTri/Layout/QuanLyPhong";
import AdminLayout from "../template/AdminTemplate";
import QuanTriBinhLuan from "../pages/QuanTri/Layout/QuanTriBinhLuan";
import AdminGuard from "./AdminGuard";

export default function useRoutesCustom() {
  const myRoutes = useRoutes([
    {
      path: "/",
      element: <UserTemplate />,
      children: [
        {
          index: true,
          element: <TrangChu />,
        },
        {
          path: "Danh-Sach-Phong/:selectedLocationId",
          element: <DanhSachPhongTheoId />,
        },
        {
          path: "Danh-Sach-Phong-Full",
          element: <DanhSachPhongFull />,
        },
        {
          path: "Danh-Sach-Phong/:selectedLocationId/Chi-Tiet-Phong/:idSelectedRoomParams",
          element: <ChiTietPhong />,
        },
        {
          path: "Thong-Tin-Nguoi-Dung",
          element: <ThongTinNguoiDung />,
        },
        {
          path: "Dang-Ky",
          element: <DangKy />,
        },
        {
          path: "Dang-Nhap",
          element: <DangNhap />,
        },
        {
          path: "*",
          element: <TrangChu />,
        },
      ],
    },
    {
      path: "Quan-Tri",
      element: (
        <AdminGuard>
          <AdminLayout />
        </AdminGuard>
      ),
      children: [
        {
          index: true,
          element: <QuanTriNguoiDung />,
        },
        {
          path: "quan-ly-nguoi-dung",
          element: <QuanTriNguoiDung />,
        },
        {
          path: "quan-ly-vi-tri",
          element: <QuanLyViTri />,
        },
        {
          path: "quan-ly-thong-tin-dat-phong",
          element: <QuanLyThongTinDatPhong />,
        },
        {
          path: "quan-ly-thong-tin-phong",
          element: <QuanLyPhong />,
        },
        {
          path: "quan-ly-binh-luan",
          element: <QuanTriBinhLuan />,
        },
      ],
    },
  ]);
  return myRoutes;
}

