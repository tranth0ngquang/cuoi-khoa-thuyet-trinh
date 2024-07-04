import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Pagination, Button, TextInput, Modal } from "flowbite-react";
import Swal from "sweetalert2";

import ModalThemPhong from "./ModalThemPhong";
import ModalChinhSuaPhong from "./ModalChinhSuaPhong";
import {
  fetchPhongData,
  deletePhong,
} from "../../../redux/Reducers/QuanTri/QuanLyPhongThunk";
import { setCurrentPage } from "../../../redux/Reducers/QuanTri/QuanLyPhongSlice";
import { useNavigate } from "react-router-dom";

const QuanLyPhong = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(userInfo);
    if (!userInfo || userInfo.role !== "ADMIN") {
      navigate("/");
    }
  }, [navigate]);
  
  const dispatch = useDispatch();
  const { phongList, totalPages, currentPage } = useSelector(
    (state) => state.quanLyPhongSlice
  );
  const [selectedPhong, setSelectedPhong] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(fetchPhongData(currentPage, keyword));
  }, [dispatch, currentPage, keyword]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleShowDetails = (phong) => {
    setSelectedPhong(phong);
  };

  const handleCloseModal = () => {
    setSelectedPhong(null);
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa phòng này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    if (confirm.isConfirmed) {
      dispatch(deletePhong(id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý phòng</h1>

      <div className="flex justify-between mb-4">
        <TextInput
          className="min-w-64"
          color="cyan"
          id="search"
          placeholder="Tìm kiếm phòng theo tên phòng"
          value={keyword}
          onChange={handleSearchChange}
        />
        <ModalThemPhong />
      </div>

      {/* Bang Thông tin Phòng */}
      <div className="mb-8 border bg-white shadow-lg w-full">
        <table className=" w-full">
          <tr className="border bg-stone-200 text-left">
            <th className="py-2 pl-2">ID</th>
            <th>Hình Ảnh</th>
            <th>Tên Phòng</th>
            <th>Mã Vị Trí</th>
            <th>Chi Tiết</th>
            <th>Thao Tác</th>
          </tr>

          {phongList.map((phong) => (
            <tr key={phong.id} className=" border">
              <td className="py-4 pl-2">{phong.id}</td>

              <td key={`avatar-${phong.id}`}>
                <img
                  src={phong.hinhAnh}
                  alt={phong.tenPhong}
                  className="w-10 h-10 rounded-full"
                />
              </td>

              <td>{phong.tenPhong}</td>
              <td>{phong.maViTri}</td>

              <td key={`ChiTiet-${phong.id}`}>
                <button
                  className="bg-cyan-700 text-white hover:bg-cyan-950 rounded-lg p-2"
                  onClick={() => handleShowDetails(phong)}
                >
                  Chi Tiết
                </button>
              </td>

              <td key={`actions-${phong.id}`}>
                <ModalChinhSuaPhong phong={phong} />

                <button
                  className="bg-red-500 text-white hover:bg-red-700 rounded-lg p-2"
                  onClick={() => handleDelete(phong.id)}
                >
                  <i className="fa fa-trash-alt"></i>
                </button>
              </td>

            </tr>
          ))}

        </table>
      </div>

      {/* <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Hình Ảnh</Table.HeadCell>
          <Table.HeadCell>Tên Phòng</Table.HeadCell>
          <Table.HeadCell>Mã Vị Trí</Table.HeadCell>
          <Table.HeadCell>Chi Tiết</Table.HeadCell>
          <Table.HeadCell>Thao Tác</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {phongList.map((phong) => (
            <Table.Row key={phong.id}>
              <Table.Cell>{phong.id}</Table.Cell>
              <Table.Cell>
                <img
                  src={phong.hinhAnh}
                  alt={phong.tenPhong}
                  className="w-10 h-10 rounded-full"
                />
              </Table.Cell>
              <Table.Cell>{phong.tenPhong}</Table.Cell>
              <Table.Cell>{phong.maViTri}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleShowDetails(phong)}>
                  Chi Tiết
                </Button>
              </Table.Cell>

              <Table.Cell>
                <ModalChinhSuaPhong phong={phong} />
                <Button color="red" onClick={() => handleDelete(phong.id)}>
                  <i className="fa fa-trash-alt"></i>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}

      <div className="text-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {selectedPhong && (
        <Modal show={true} onClose={handleCloseModal}>
          <Modal.Header>Chi Tiết Phòng</Modal.Header>
          <Modal.Body className="text-black dark:text-stone-300">
            <p>
              <strong>ID:</strong> {selectedPhong.id}
            </p>
            <p>
              <strong>Tên Phòng:</strong> {selectedPhong.tenPhong}
            </p>
            <p>
              <strong>Khách:</strong> {selectedPhong.khach}
            </p>
            <p>
              <strong>Phòng Ngủ:</strong> {selectedPhong.phongNgu}
            </p>
            <p>
              <strong>Giường:</strong> {selectedPhong.giuong}
            </p>
            <p>
              <strong>Phòng Tắm:</strong> {selectedPhong.phongTam}
            </p>
            <p>
              <strong>Mô Tả:</strong> {selectedPhong.moTa}
            </p>
            <p>
              <strong>Giá Tiền:</strong> {selectedPhong.giaTien}
            </p>
            <p>
              <strong>Máy Giặt:</strong>{" "}
              {selectedPhong.mayGiat ? "Có" : "Không"}
            </p>
            <p>
              <strong>Bàn Là:</strong> {selectedPhong.banLa ? "Có" : "Không"}
            </p>
            <p>
              <strong>TV:</strong> {selectedPhong.tivi ? "Có" : "Không"}
            </p>
            <p>
              <strong>Điều Hòa:</strong>{" "}
              {selectedPhong.dieuHoa ? "Có" : "Không"}
            </p>
            <p>
              <strong>Wifi:</strong> {selectedPhong.wifi ? "Có" : "Không"}
            </p>
            <p>
              <strong>Bếp:</strong> {selectedPhong.bep ? "Có" : "Không"}
            </p>
            <p>
              <strong>Đỗ Xe:</strong> {selectedPhong.doXe ? "Có" : "Không"}
            </p>
            <p>
              <strong>Hồ Bơi:</strong> {selectedPhong.hoBoi ? "Có" : "Không"}
            </p>
            <p>
              <strong>Bàn Ủi:</strong> {selectedPhong.banUi ? "Có" : "Không"}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModal}>Đóng</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default QuanLyPhong;
