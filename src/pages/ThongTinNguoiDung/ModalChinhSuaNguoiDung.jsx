"use client";
// import {
//   Button,
//   Label,
//   Modal,
//   TextInput,
//   Select,
//   Radio,
// } from "flowbite-react";
import { Button, Modal, TextInput, Label, Select, Radio } from "flowbite-react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PutCapNhatUser } from "../../redux/Reducers/UserInfo/UserThunk";


const MySwal = withReactContent(Swal);

export function ModalChinhSuaNguoiDung() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: true,
    birthday: new Date(),
    id: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userObject = JSON.parse(user);
      const parsedBirthday = userObject.birthday
        ? new Date(userObject.birthday)
        : new Date();
      setUser({
        name: userObject.name,
        email: userObject.email,
        phone: userObject.phone,
        gender: userObject.gender,
        birthday: parsedBirthday,
        id: userObject.id,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDateChange = (date) => {
    setUser({ ...user, birthday: date });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    return re.test(phone);
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!validateEmail(user.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!validatePhone(user.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!user.name) {
      newErrors.name = "Họ tên không được để trống";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await dispatch(PutCapNhatUser({ userID: user.id, infoCapNhat: user }));
        MySwal.fire({
          title: "Thành công!",
          text: "Cập nhật người dùng thành công.",
          icon: "success",
        });
        setOpenModal(false);
      } catch (error) {
        MySwal.fire({
          title: "Lỗi!",
          text: "Đã xảy ra lỗi khi cập nhật người dùng.",
          icon: "error",
        });
        console.error("Failed to update user:", error);
      }
    }
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="bg-cyan-500 text-white text-center hover:bg-cyan-700 duration-500 py-2 px-8 rounded-full mb-8">
        Chỉnh sửa Thông tin
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className="relative bg-gradient-to-b from-cyan-700 to-cyan-950 text-white rounded-xl p-4">

          {/* nút close tab */}
          <div className="absolute top-7 right-7">
            <button onClick={() => setOpenModal(false)}>
              <i class="fa-solid fa-xmark  text-xl text-cyan-300 hover:text-white bg-cyan-900 hover:bg-cyan-950 px-2.5 py-1 rounded-full duration-500"></i>
            </button>
          </div>

          <div className="text-center">
            <div className="text-center font-bold text-2xl pb-4 pt-4 uppercase">Chỉnh sửa Thông tin Cá nhân</div>

            <div className="text-center">
              <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* name */}
                <div className="relative z-0 w-full mb-5 group">
                  <input type="name" name="name" id="name" value={user.name} onChange={handleInputChange} placeholder="" required
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-stone-500 focus:border-cyan-500 focus:outline-none focus:ring-0 peer" />

                  <label htmlFor="name" value="name" className="peer-focus:font-medium absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Họ và tên</label>

                  {errors.name && (
                    <p className="text-cyan-300 text-sm pt-2">{errors.name}</p>
                  )}
                </div>

                {/* email */}
                <div className="relative z-0 w-full mb-5 group">
                  <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange} placeholder=" " required
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-stone-500 focus:border-cyan-500 focus:outline-none focus:ring-0 peer" />

                  <label htmlFor="email" value="Email" className="peer-focus:font-medium absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>

                  {errors.email && (
                    <p className="text-cyan-300 text-sm pt-2">{errors.email}</p>
                  )}
                </div>

                {/* phone */}
                <div className="relative z-0 w-full mb-5 group">
                  <input type="phone" name="phone" id="phone" value={user.phone} onChange={handleInputChange} placeholder="" required
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-stone-500 focus:border-cyan-500 focus:outline-none focus:ring-0 peer" />

                  <label htmlFor="phone" value="phone" className="peer-focus:font-medium absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Số điện thoại</label>

                  {errors.phone && (
                    <p className="text-cyan-300 text-sm pt-2">{errors.phone}</p>
                  )}
                </div>
                <div></div>

                {/* sinh nhật - birthday */}
                <div className="z-0 w-full mb-5 group">
                  <label htmlFor="birthday" value="Birthday" className="text-sm text-stone-400">Birthday</label>
                  <div className="text-stone-400 text-sm">
                    <DatePicker
                      id="birthday"
                      name="birthday"
                      type="birthday"
                      selected={user.birthday}
                      onChange={handleDateChange}
                      className="pl-0 w-full bg-transparent text-sm text-white border-0 border-b-2 border-stone-500 focus:border-cyan-500 focus:outline-none focus:ring-0 peer"
                    />
                  </div>

                  {/* {formik.errors.birthday && formik.touched.birthday && (
                    <p className="text-cyan-300 text-sm pt-2">{formik.errors.birthday}</p>
                  )} */}
                </div>

                <div className="z-0 w-full mb-5 group">
                  <label htmlFor="gender" value="gender" className="text-sm text-stone-400">Giới tính</label>
                  <div className="flex gap-4 mt-3">
                    <Radio
                      id="gender-male"
                      name="gender"
                      value={user.gender}
                      checked={user.gender === true}
                      onChange={handleInputChange}
                    />
                    <Label htmlFor="gender-male">Nam</Label>
                    <Radio
                      id="gender-female"
                      name="gender"
                      value={user.gender}
                      checked={user.gender === false}
                      onChange={handleInputChange}
                    />
                    <Label htmlFor="gender-female">Nữ</Label>
                  </div>
                  {errors.gender && (
                    <p className="text-cyan-300 text-sm pt-2">{errors.gender}</p>
                  )}
                </div>

                {/* <div>
                  <Label htmlFor="gender" value="Giới tính" />
                  <Select
                    id="gender"
                    name="gender"
                    value={user.gender}
                    onChange={handleInputChange}
                  >
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </Select>
                </div> */}


              </div>
            </div>

            {/* nút Cập nhật */}
            <button type="submit" onClick={handleSubmit} className="bg-cyan-500 text-center hover:bg-cyan-700 duration-500 py-2 px-8 rounded-full mb-8">
              Cập nhật
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
