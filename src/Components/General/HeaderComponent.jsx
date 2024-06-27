"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { DangKy } from "../../pages/DangKy/DangKy";
import { DangNhap } from "../../pages/DangKy/DanhNhap";
import {
  setIsAdmin,
  setIsnotAdmin,
  setStateLogin,
  setStateLogout,
} from "../../redux/Reducers/LoginStatus/LoginStatusSlice";
import { Link as ScrollLink } from "react-scroll";

export function HeaderComponent() {
  const { isLogin, isAdmin } = useSelector((state) => state.loginStatusSlice);
  const infoUser = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  useEffect(() => {
    // Kiểm tra localStorage khi component mount
    if (infoUser) {
      dispatch(setStateLogin());
      if (infoUser.role === "ADMIN") {
        dispatch(setIsAdmin());
      }
    }
  }, [dispatch, infoUser]);

  const handleLogout = () => {
    dispatch(setStateLogout());
    dispatch(setIsnotAdmin());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <Navbar fluid rounded>
      <Link to="">
        <img
          src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
          alt="airBnB logo"
        />
      </Link>
      <div className="flex md:order-2">
        {isLogin ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <div>
            <DangNhap />
            <DangKy />
          </div>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <NavLink activeClassName to="/">
          Trang Chủ
        </NavLink>
        <NavLink activeClassName to="/Danh-Sach-Phong-Full">
          Danh Sách Phòng
        </NavLink>
        <NavLink to="/Danh-Sach-Phong/1">Phòng Đặt Nhiều</NavLink>
        <ScrollLink
          to="footer"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Về Chúng Tôi
        </ScrollLink>
        {isLogin && isAdmin && <NavLink to="/Quan-Tri">Quản trị</NavLink>}
      </Navbar.Collapse>
    </Navbar>
  );
}
