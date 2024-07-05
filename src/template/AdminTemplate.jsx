import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HeaderComponentAdmin } from "../Components/General/HeaderComponentAdmin";
const AdminLayout = () => {
  return (
    <>
      <HeaderComponentAdmin />
      <div className="flex h-screen">
        <Sidebar className="w-72 nav_admin_sideBar">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <div className="py-2">
                <NavLink
                  to="quan-ly-nguoi-dung"
                  className={({ isActive }) =>
                    isActive ? "w-full px-4 py-2 text-white hover:text-cyan-200 bg-cyan-500 hover:bg-cyan-700 duration-500 rounded-xl no-underline" : "w-full px-4 py-2 text-black hover:text-white bg-white hover:bg-cyan-700 duration-500 rounded-xl no-underline"
                  }
                >
                  Quản lý người dùng
                </NavLink>
              </div>

              <div className="py-2">
                <NavLink
                  to="quan-ly-vi-tri"
                  className={({ isActive }) =>
                    isActive ? "w-full px-4 py-2 text-white hover:text-cyan-200 bg-cyan-500 hover:bg-cyan-700 duration-500 rounded-xl no-underline" : "w-full px-4 py-2 text-black hover:text-white bg-white hover:bg-cyan-700 duration-500 rounded-xl no-underline"
                  }
                >
                  Quản lý vị trí
                </NavLink>
              </div>

              <div className="py-2">
                <NavLink
                  to="quan-ly-thong-tin-phong"
                  className={({ isActive }) =>
                    isActive ? "w-full px-4 py-2 text-white hover:text-cyan-200 bg-cyan-500 hover:bg-cyan-700 duration-500 rounded-xl no-underline" : "w-full px-4 py-2 text-black hover:text-white bg-white hover:bg-cyan-700 duration-500 rounded-xl no-underline"
                  }
                >
                  Quản lý thông tin phòng
                </NavLink>
              </div>

              <div className="py-2">
                <NavLink
                  to="quan-ly-thong-tin-dat-phong"
                  className={({ isActive }) =>
                    isActive ? "w-full px-4 py-2 text-white hover:text-cyan-200 bg-cyan-500 hover:bg-cyan-700 duration-500 rounded-xl no-underline" : "w-full px-4 py-2 text-black hover:text-white bg-white hover:bg-cyan-700 duration-500 rounded-xl no-underline"
                  }
                >
                  Quản lý thông tin đặt phòng
                </NavLink>
              </div>

              <div className="py-2">
                <NavLink
                  to="quan-ly-binh-luan"
                  className={({ isActive }) =>
                    isActive ? "w-full px-4 py-2 text-white hover:text-cyan-200 bg-cyan-500 hover:bg-cyan-700 duration-500 rounded-xl no-underline" : "w-full px-4 py-2 text-black hover:text-white bg-white hover:bg-cyan-700 duration-500 rounded-xl no-underline"
                  }
                >
                  Quản lý bình luận
                </NavLink>
              </div>
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
