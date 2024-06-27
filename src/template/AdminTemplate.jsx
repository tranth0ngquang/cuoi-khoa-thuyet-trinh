import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HeaderComponentAdmin } from "../Components/General/HeaderComponentAdmin";
const AdminLayout = () => {
  return (
    <>
      <HeaderComponentAdmin />
      <div className="flex h-screen">
        <Sidebar className="w-64">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item as="div">
                <NavLink
                  to="quan-ly-nguoi-dung"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                >
                  Quản lý người dùng
                </NavLink>
              </Sidebar.Item>
              <Sidebar.Item as="div">
                <NavLink
                  to="quan-ly-vi-tri"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                >
                  Quản lý vị trí
                </NavLink>
              </Sidebar.Item>
              <Sidebar.Item as="div">
                <NavLink
                  to="quan-ly-thong-tin-phong"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                >
                  Quản lý thông tin phòng
                </NavLink>
              </Sidebar.Item>
              <Sidebar.Item as="div">
                <NavLink
                  to="quan-ly-thong-tin-dat-phong"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-gray-700"
                  }
                >
                  Quản lý thông tin đặt phòng
                </NavLink>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
