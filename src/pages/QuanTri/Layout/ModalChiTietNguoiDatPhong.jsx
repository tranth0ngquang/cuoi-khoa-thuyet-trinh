import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "flowbite-react";
import { fetchUserInfo } from "../../../redux/Reducers/UserInfo/UserThunk";
import { fetchUserDetail } from "../../../redux/Reducers/QuanTri/QuanLyDatPhongThunk";

export default function ModalChiTietNguoiDatPhong({ userId, show, onClose }) {
  const dispatch = useDispatch();
  const { userDetail } = useSelector((state) => state.quanLyDatPhongSlice);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserDetail(userId));
    }
  }, [dispatch, userId]);


  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Thông Tin Người Đặt Phòng</Modal.Header>
      <Modal.Body>
        {userDetail ? (
          <div className="space-y-4">
            <p>
              <strong>ID:</strong> {userDetail.id}
            </p>
            <p>
              <strong>Tên:</strong> {userDetail.name}
            </p>
            <p>
              <strong>Email:</strong> {userDetail.email}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {userDetail.phone}
            </p>
            <p>
              <strong>Ngày sinh:</strong> {userDetail.birthday}
            </p>
            <p>
              <strong>Giới tính:</strong> {userDetail.gender ? "Nam" : "Nữ"}
            </p>
          </div>
        ) : (
          <p>Đang tải...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}
