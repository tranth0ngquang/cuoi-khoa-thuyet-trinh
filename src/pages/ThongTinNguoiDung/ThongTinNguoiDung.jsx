import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  fetchMangPhongDaDat,
  fetchUserInfo,
  uploadAvatar,
} from "../../redux/Reducers/UserInfo/UserThunk";
import { ModalChinhSuaNguoiDung } from "./ModalChinhSuaNguoiDung";
import { Avatar, Button } from "flowbite-react";
import DanhSachPhongDaDat from "./DanhSachPhongDaDat";

const MySwal = withReactContent(Swal);

export default function ThongTinNguoiDung() {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const userName = JSON.parse(user).name;
  const { userInfo } = useSelector((state) => state.userInfoSlice);
  const { mangPhongDaDat } = useSelector((state) => state.userInfoSlice);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    dispatch(fetchMangPhongDaDat(userId));
    dispatch(fetchUserInfo(userId));
  }, [dispatch, userId]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadAvatar = async () => {
    if (!selectedFile) {
      MySwal.fire({
        title: "Lỗi!",
        text: "Vui lòng chọn một ảnh.",
        icon: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("formFile", selectedFile);

    try {
      await dispatch(uploadAvatar({ formData }));
      MySwal.fire({
        title: "Thành công!",
        text: "Cập nhật avatar thành công.",
        icon: "success",
      });
      dispatch(fetchUserInfo(userId)); // Refresh user info
    } catch (error) {
      MySwal.fire({
        title: "Lỗi!",
        text: "Đã xảy ra lỗi khi cập nhật avatar.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h1>Xin chào, tôi là {userName}</h1>
      <ModalChinhSuaNguoiDung />
      <div className="flex flex-wrap gap-2">
        <Avatar img={userInfo ? userInfo.avatar : ""} size="lg" />
        <input type="file" onChange={handleFileChange} />
        <Button onClick={handleUploadAvatar}>Cập nhật avatar</Button>
        <DanhSachPhongDaDat />
      </div>
    </div>
  );
}
