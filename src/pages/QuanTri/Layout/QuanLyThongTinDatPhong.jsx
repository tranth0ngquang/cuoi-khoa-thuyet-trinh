import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Pagination,
  Button,
  Modal,
  TextInput,
  Label,
} from "flowbite-react";
import Swal from "sweetalert2";

import {
  fetchDatPhongData,
  updateDatPhong,
  deleteDatPhong,
} from "../../../redux/Reducers/QuanTri/QuanLyDatPhongThunk";
import { setCurrentPage } from "../../../redux/Reducers/QuanTri/QuanLyDatPhongSlice";

const QuanLyThongTinDatPhong = () => {
  const dispatch = useDispatch();
  const { datPhongList, totalPages, currentPage } = useSelector(
    (state) => state.quanLyDatPhongSlice
  );
  const [keyword, setKeyword] = useState("");
  const [selectedDatPhong, setSelectedDatPhong] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: 0,
    maPhong: 0,
    ngayDen: "",
    ngayDi: "",
    soLuongKhach: 0,
    maNguoiDung: 0,
  });

  useEffect(() => {
    dispatch(fetchDatPhongData());
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `${day}/${month}/${year}`;
  };

  const handleEditClick = (datPhong) => {
    setEditFormData({
      id: datPhong.id,
      maPhong: datPhong.maPhong,
      ngayDen: datPhong.ngayDen,
      ngayDi: datPhong.ngayDi,
      soLuongKhach: datPhong.soLuongKhach,
      maNguoiDung: datPhong.maNguoiDung,
    });
    setSelectedDatPhong(datPhong);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = async () => {
    try {
      await dispatch(updateDatPhong(editFormData));
      setSelectedDatPhong(null);
    } catch (error) {
      console.error("Failed to update dat phong: ", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa đặt phòng này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    if (confirm.isConfirmed) {
      dispatch(deleteDatPhong(id));
    }
  };

  const paginatedData = datPhongList.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý thông tin đặt phòng</h1>
      <div className="flex justify-between mb-4">
        <TextInput
          id="search"
          placeholder="Tìm kiếm đặt phòng"
          value={keyword}
          onChange={handleSearchChange}
        />
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Mã Phòng</Table.HeadCell>
          <Table.HeadCell>Ngày Đến</Table.HeadCell>
          <Table.HeadCell>Ngày Đi</Table.HeadCell>
          <Table.HeadCell>Số Lượng Khách</Table.HeadCell>
          <Table.HeadCell>Mã Người Dùng</Table.HeadCell>
          <Table.HeadCell>Thao Tác</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {paginatedData.map((datPhong) => (
            <Table.Row key={datPhong.id}>
              <Table.Cell>{datPhong.id}</Table.Cell>
              <Table.Cell>{datPhong.maPhong}</Table.Cell>
              <Table.Cell>{formatDate(datPhong.ngayDen)}</Table.Cell>
              <Table.Cell>{formatDate(datPhong.ngayDi)}</Table.Cell>
              <Table.Cell>{datPhong.soLuongKhach}</Table.Cell>
              <Table.Cell>{datPhong.maNguoiDung}</Table.Cell>
              <Table.Cell>
                <Button
                  color="yellow"
                  onClick={() => handleEditClick(datPhong)}
                >
                  <i className="fa fa-pencil-alt"></i>
                </Button>
                <Button color="red" onClick={() => handleDelete(datPhong.id)}>
                  <i className="fa fa-trash-alt"></i>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {selectedDatPhong && (
        <Modal show={true} onClose={() => setSelectedDatPhong(null)}>
          <Modal.Header>Chỉnh Sửa Đặt Phòng</Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <div>
                <Label htmlFor="maPhong" value="Mã Phòng" />
                <TextInput
                  id="maPhong"
                  name="maPhong"
                  value={editFormData.maPhong}
                  onChange={handleEditInputChange}
                  placeholder="Mã Phòng"
                  required
                />
              </div>
              <div>
                <Label htmlFor="ngayDen" value="Ngày Đến" />
                <TextInput
                  id="ngayDen"
                  name="ngayDen"
                  type="date"
                  value={editFormData.ngayDen.split("T")[0]}
                  onChange={handleEditInputChange}
                  placeholder="Ngày Đến"
                  required
                />
              </div>
              <div>
                <Label htmlFor="ngayDi" value="Ngày Đi" />
                <TextInput
                  id="ngayDi"
                  name="ngayDi"
                  type="date"
                  value={editFormData.ngayDi.split("T")[0]}
                  onChange={handleEditInputChange}
                  placeholder="Ngày Đi"
                  required
                />
              </div>
              <div>
                <Label htmlFor="soLuongKhach" value="Số Lượng Khách" />
                <TextInput
                  id="soLuongKhach"
                  name="soLuongKhach"
                  type="number"
                  value={editFormData.soLuongKhach}
                  onChange={handleEditInputChange}
                  placeholder="Số Lượng Khách"
                  required
                />
              </div>
              <div>
                <Label htmlFor="maNguoiDung" value="Mã Người Dùng" />
                <TextInput
                  id="maNguoiDung"
                  name="maNguoiDung"
                  type="number"
                  value={editFormData.maNguoiDung}
                  onChange={handleEditInputChange}
                  placeholder="Mã Người Dùng"
                  required
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleEditSubmit}>Cập Nhật</Button>
            <Button color="gray" onClick={() => setSelectedDatPhong(null)}>
              Hủy
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default QuanLyThongTinDatPhong;
