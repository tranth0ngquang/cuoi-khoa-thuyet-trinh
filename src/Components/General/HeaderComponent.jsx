"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DangKy } from "../../pages/DangKy/DangKy";
import { DangNhap } from "../../pages/DangKy/DanhNhap";
import {
  setIsAdmin,
  setIsnotAdmin,
  setStateLogin,
  setStateLogout,
} from "../../redux/Reducers/LoginStatus/LoginStatusSlice";
import { Link as ScrollLink } from "react-scroll";
import { fetchUserInfo } from "../../redux/Reducers/UserInfo/UserThunk";
import LogoZahaSvg from "../../pages/TrangChu/Layout/LogoZahaSvg";

export function HeaderComponent() {
  const { isLogin, isAdmin } = useSelector((state) => state.loginStatusSlice);
  const { userInfo } = useSelector((state) => state.userInfoSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDangNhap, setOpenDangNhap] = useState(false);
  const [openDangKy, setOpenDangKy] = useState(false);

  useEffect(() => {
    const infoUser = JSON.parse(localStorage.getItem("user"));
    if (infoUser) {
      dispatch(setStateLogin());
      dispatch(fetchUserInfo(infoUser.id));
      console.log(1);
      if (infoUser.role === "ADMIN") {
        dispatch(setIsAdmin());
      }
    }
  }, [dispatch]);

  const handleLogout = () => {
    navigate("/");
    dispatch(setStateLogout());
    dispatch(setIsnotAdmin());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  console.log("userInfo o header", userInfo);
  return (
    <Navbar
      fluid
      className="w-full bg-white/90 dark:bg-white/90 text-stone-500 px-4 sm:px-10 py-2.5 rounded-none rounded-b-3xl fixed z-50 shadow-lg"
    >
      <Link to="">
        <LogoZahaSvg />
      </Link>
      <div className="flex md:order-2">
        {isLogin ? (
          <Dropdown
            className="nav_ava"
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={userInfo && userInfo.avatar}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm text-black">{userInfo?.name}</span>
              <span className="block truncate text-sm font-medium text-black">
                {userInfo?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item className="dark:text-black dark:focus:text-white hover:bg-cyan-500 dark:hover:bg-cyan-500">
              <Link
                to="/Thong-Tin-Nguoi-Dung"
                className="hover:text-white dark:focus:text-white"
              >
                Thông tin cá nhân
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={handleLogout}
              className="dark:text-black dark:focus:text-white hover:bg-cyan-500 dark:hover:bg-cyan-500"
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <div className="flex space-x-2">
            <Button
              className="bg-transparent dark:bg-transparent text-cyan-500 hover:text-white border-cyan-500 rounded-full focus:ring-1"
              onClick={() => setOpenDangNhap(true)}
            >
              Đăng nhập
            </Button>
            <Button
              className="bg-cyan-500 dark:bg-cyan-500 text-white border-cyan-500 rounded-full focus:ring-1 DangKy"
              onClick={() => setOpenDangKy(true)}
            >
              Đăng ký
            </Button>
          </div>
        )}

        {/* <Navbar.Toggle /> */}
        <Navbar.Toggle className="custom-burger-icon" />
      </div>

      <Navbar.Collapse className="nav_text_ul">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Trang Chủ
        </NavLink>
        <NavLink
          to="/Danh-Sach-Phong-Full"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Danh Sách Phòng
        </NavLink>
        <NavLink
          to="/Danh-Sach-Phong/1"
          className={({ isActive }) =>
            isActive ? "active nav_block" : "inactive nav_block"
          }
        >
          Phòng Đặt Nhiều
        </NavLink>
        <ScrollLink
          to="footer"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
          className={"nav_block"}
        >
          Về Chúng Tôi
        </ScrollLink>
        {isLogin && isAdmin && (
          <NavLink
            to="/Quan-Tri"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Quản trị
          </NavLink>
        )}
      </Navbar.Collapse>

      <DangNhap
        show={openDangNhap}
        setShow={setOpenDangNhap}
        toggleToDangKy={() => setOpenDangKy(true)}
        className={93}
      />
      <DangKy
        show={openDangKy}
        setShow={setOpenDangKy}
        toggleToDangNhap={() => setOpenDangNhap(true)}
      />
    </Navbar>
  );
}
