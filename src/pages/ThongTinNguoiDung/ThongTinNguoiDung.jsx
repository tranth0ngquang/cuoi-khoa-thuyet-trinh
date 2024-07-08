import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  fetchMangPhongDaDat,
  fetchUserInfo,
  uploadAvatar,
} from "../../redux/Reducers/UserInfo/UserThunk";
import DanhSachPhongDaDat from "./DanhSachPhongDaDat";
import { ModalChinhSuaNguoiDung } from "./ModalChinhSuaNguoiDung";

const MySwal = withReactContent(Swal);

export default function ThongTinNguoiDung() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;
  const { userInfo } = useSelector((state) => state.userInfoSlice);
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    dispatch(fetchMangPhongDaDat(userId));
    dispatch(fetchUserInfo(userId));
  }, [dispatch, userId]);

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
    dispatch(uploadAvatar(formData));
    document.getElementById('fileInput').value = null; // Reset input file
    setAvatarPreview(null);
  };

  return (
    <div>
      <img src="/img/BannerNav5.png" alt="" className="w-full pt-16 md:pt-0" />
      <div className="mx-auto w-full max-w-screen-2xl p-4 pb-6 lg:pb-8 text-center">
        <div>
          <p className="font-bold text-2xl pb-2">Xin chào bạn</p>

          <div className="bg-center bg-cover h-40 w-40 rounded-full text-center mx-auto border-yellow-400 border-4 "
            style={{ backgroundImage: `url("${userInfo.avatar}")` }}>
          </div>

          <p className="text-yellow-500 font-bold text-2xl pt-2">{userInfo.name}</p>
          <p className="text-lg">Chúc bạn có những trải nghiệm tốt đẹp</p>

        </div>

        <div className="flex flex-wrap items-start gap-12 justify-center mt-4">

          <div className="border px-10 rounded-3xl bg-white shadow-md hover:shadow-xl hover:bg-stone-100 hover:border-yellow-300 duration-500">
            <p className="pt-4 text-yellow-500 mb-2">
              Chỉnh sửa <span className="font-bold uppercase text-black">thông tin</span> tại đây
              <i className="fa-solid fa-circle-chevron-down ml-2"></i>
            </p>
            <ModalChinhSuaNguoiDung />
          </div>

          <div className="border px-10 rounded-3xl bg-white shadow-md hover:shadow-xl hover:bg-stone-100 hover:border-yellow-300 duration-500">
            <p className="pt-4 text-yellow-500 mb-2">
              Chỉnh sửa <span className="font-bold uppercase text-black">ảnh ava</span> tại đây
              <i className="fa-solid fa-circle-chevron-down ml-2"></i>
            </p>

            {/* <div className="flex flex-wrap gap-4 justify-center"> */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div>
                <input id="fileInput" type="file" onChange={handleFileChange} className="w-60 rounded-full bg-cyan-500 text-white" />
                {avatarPreview && (
                  <div>
                    <img src={avatarPreview} alt="Avatar Preview" className="mt-4 w-40 h-40 mx-auto object-cover rounded-full border-yellow-400 border-4" />
                    <button onClick={handleUploadAvatar}
                      className="bg-yellow-500 text-white text-center hover:bg-yellow-700 duration-500 py-2 px-8 rounded-full mt-4">
                      Cập nhật avatar
                    </button>
                  </div>

                )}
              </div>
            </div>
          </div>
        </div>

      </div>
      <hr className="mx-auto w-full max-w-screen-2xl p-4" />


      <DanhSachPhongDaDat />
    </div>
  );
}
