import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { Table, Pagination } from "flowbite-react";
import Swal from "sweetalert2";

import {
  addUser,
  fetchUserData,
  updateUser,
  searchUser,
  deleteUser,
} from "../../../redux/Reducers/QuanTri/QuanTriThunk";
import {
  setCurrentPage,
  updateUserInList,
  setUserList,
  removeUserFromList,
} from "../../../redux/Reducers/QuanTri/QuanTriSlice";
import { useNavigate } from "react-router-dom";

const QuanTriNguoiDung = () => {
  const dispatch = useDispatch();
  const { userList, totalPages, currentPage } = useSelector(
    (state) => state.quanTriSlice
  );
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(userInfo);
    if (!userInfo || userInfo.role !== "ADMIN") {
      navigate("/");
    }
  }, [navigate]);
  useEffect(() => {
    dispatch(fetchUserData(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "USER",
  });
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "USER",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleDangKy = () => {
    dispatch(addUser(formData));
    setOpenModal(false);
  };

  const handleEditUser = (user) => {
    setEditFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      birthday: user.birthday,
      gender: user.gender,
      role: user.role,
    });
    setOpenEditModal(true);
  };

  const handleUpdateUser = async () => {
    try {
      await dispatch(updateUser(editFormData));
      dispatch(updateUserInList(editFormData)); // Cập nhật userList ngay sau khi cập nhật thành công
      setOpenEditModal(false);
      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Cập nhật người dùng thành công!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Thất bại",
        text: "Đã xảy ra lỗi khi cập nhật dữ liệu!",
      });
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      dispatch(fetchUserData(currentPage));
    } else {
      const result = await dispatch(searchUser(searchTerm));
      dispatch(setUserList(result));
    }
  };

  const handleDeleteUser = async (userId) => {
    Swal.fire({
      title: "Bạn có muốn xóa người dùng này không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có, xóa!",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(deleteUser(userId));
          dispatch(removeUserFromList(userId)); // Cập nhật userList ngay sau khi xóa thành công
          Swal.fire("Đã xóa!", "Người dùng đã được xóa.", "success");
        } catch (error) {
          Swal.fire("Thất bại!", "Đã xảy ra lỗi khi xóa người dùng.", "error");
        }
      }
    });
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-cyan-700">Quản lý người dùng</h1>

      <div className="flex justify-between mb-4">
        <TextInput
          className="min-w-64"
          color="cyan"
          id="search"
          name="search"
          placeholder="Tìm kiếm người dùng theo tên..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="bg-cyan-500 text-white hover:bg-cyan-800 rounded-lg py-2 px-6 duration-500" onClick={() => setOpenModal(true)}>
          Thêm người dùng
        </button>
      </div>

      {/* Bang Thông tin nguoi dung */}
      <div className="mb-8 border bg-white shadow-lg w-full">
        <table className=" w-full">
          <tr className="border bg-stone-200 text-left">
            <th className="py-2 pl-2">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Birthday</th>
            <th>Avatar</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Action</th>
          </tr>

          {userList.map((user) => (
            <tr key={user.id} className=" border">
              <td className="py-4 pl-2">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td>{user.birthday}</td>
              <td key={`avatar-${user.id}`}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td>{user.gender ? "Male" : "Female"}</td>
              <td>{user.role}</td>
              <td key={`actions-${user.id}`}>
                <button
                  className="bg-cyan-500 text-white hover:bg-cyan-800 rounded-lg p-2 mr-2"
                  onClick={() => handleEditUser(user)}
                >
                  <i className="fa fa-pencil-alt"></i>
                </button>
                <button
                  className="bg-red-500 text-white hover:bg-red-700 rounded-lg p-2"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <i className="fa fa-trash-alt"></i>
                </button>
              </td>

            </tr>
          ))}

        </table>
        {/* <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Password</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Birthday</Table.HeadCell>
          <Table.HeadCell>Avatar</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head> */}
        {/* <Table.Body>
          {userList.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.password}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>{user.birthday}</Table.Cell>
              <Table.Cell key={`avatar-${user.id}`}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </Table.Cell>
              <Table.Cell>{user.gender ? "Male" : "Female"}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell key={`actions-${user.id}`}>
                <button
                  className="bg-cyan-500 text-white hover:bg-cyan-950 rounded-lg p-2"
                  onClick={() => handleEditUser(user)}
                >
                  <i className="fa fa-pencil-alt"></i>
                </button>
                <button
                  className="bg-cyan-700 text-white hover:bg-cyan-950 rounded-lg p-2"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <i className="fa fa-trash-alt"></i>
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body> */}
      </div>

      <div className="text-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>


      {/* Modal Them nguoi dung */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thêm người dùng</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" value="Name" />
              <TextInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" value="Phone" />
              <TextInput
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
              />
            </div>
            <div>
              <Label htmlFor="birthday" value="Birthday" />
              <TextInput
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                placeholder="Birthday"
                required
              />
            </div>
            <div>
              <Label htmlFor="gender" value="Gender" />
              <Select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value={true}>Male</option>
                <option value={false}>Female</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="role" value="Role" />
              <Select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDangKy}>Đăng ký</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Chinh sua nguoi dung */}
      <Modal show={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Modal.Header>Chỉnh sửa người dùng</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-name" value="Name" />
              <TextInput
                id="edit-name"
                name="name"
                value={editFormData.name}
                onChange={handleEditInputChange}
                placeholder="Name"
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-email" value="Email" />
              <TextInput
                id="edit-email"
                name="email"
                type="email"
                value={editFormData.email}
                onChange={handleEditInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-phone" value="Phone" />
              <TextInput
                id="edit-phone"
                name="phone"
                value={editFormData.phone}
                onChange={handleEditInputChange}
                placeholder="Phone"
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-birthday" value="Birthday" />
              <TextInput
                id="edit-birthday"
                name="birthday"
                value={editFormData.birthday}
                onChange={handleEditInputChange}
                placeholder="Birthday"
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-gender" value="Gender" />
              <Select
                id="edit-gender"
                name="gender"
                value={editFormData.gender}
                onChange={handleEditInputChange}
              >
                <option value={true}>Male</option>
                <option value={false}>Female</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-role" value="Role" />
              <Select
                id="edit-role"
                name="role"
                value={editFormData.role}
                onChange={handleEditInputChange}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdateUser}>Cập nhật</Button>
          <Button color="gray" onClick={() => setOpenEditModal(false)}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuanTriNguoiDung;
