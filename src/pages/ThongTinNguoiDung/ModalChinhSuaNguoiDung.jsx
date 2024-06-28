"use client";

import { Button, Modal, TextInput, Label, Select } from "flowbite-react";
import { useState, useEffect } from "react";
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
      <Button onClick={() => setOpenModal(true)}>Chỉnh sửa người dùng</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Chỉnh sửa thông tin người dùng</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" value="Họ tên" />
              <TextInput
                id="name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                placeholder="Họ tên"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" value="Số điện thoại" />
              <TextInput
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                placeholder="Số điện thoại"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
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
            </div>
            <div>
              <Label htmlFor="birthday" value="Ngày sinh" />
              <DatePicker
                id="birthday"
                selected={user.birthday}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Cập nhật</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Hủy bỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
