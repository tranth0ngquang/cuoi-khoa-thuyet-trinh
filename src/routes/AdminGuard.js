import React from "react";
import { Navigate } from "react-router-dom";

const AdminGuard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Nếu không có object user trong localStorage, điều hướng về trang đăng nhập hoặc trang khác
    return <Navigate to="/" />;
  }

  // Nếu có user, hiển thị các trang quản trị
  return children;
};

export default AdminGuard;
